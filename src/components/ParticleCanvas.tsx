"use client";

import { useEffect, useRef } from "react";
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  InstancedMesh,
  CircleGeometry,
  ShaderMaterial,
  Object3D,
  InstancedBufferAttribute,
} from "three";

interface ParticleCanvasProps {
  particleCount?: number;
  enableShapeFormation?: boolean;
  followCursor?: boolean;
  className?: string;
}

/* ── Particle state ─────────────────────────────────────── */
interface P {
  homeAngle: number; // fixed angle in the disc
  homeRadius: number; // fixed distance from center (0 = center, 1 = edge)
  x: number;
  y: number;
  w: number;
  h: number;
  rot: number;
  cr: number;
  cg: number;
  cb: number;
  alpha: number;
  baseAlpha: number;
  phase: number;
  tx: number;
  ty: number;
}

/* Brand-aligned palette (RGB 0-1) */
const PAL = [
  [0.545, 0.145, 0],
  [0.545, 0.145, 0],
  [0.627, 0.196, 0.059],
  [0.314, 0.392, 0.569],
  [0.706, 0.471, 0.157],
  [0.392, 0.51, 0.353],
];

/* Simple deterministic noise */
function noise(x: number, y: number): number {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return (n - Math.floor(n)) * 2 - 1;
}

/* ── Growth chart arrow (CTA section) ───────────────────── */
/*  Revenue chart shape: up → dip → breakout ↗ with arrowhead
 *
 *                          ↗  (arrowhead)
 *                        /
 *                      /
 *      /\            /
 *    /    \        /
 *  /        \    /
 * •           \/
 */
function calcW(ps: P[], w: number, h: number) {
  const p0 = { x: w * 0.08, y: h * 0.68 }; // start bottom-left
  const p1 = { x: w * 0.25, y: h * 0.38 }; // first peak
  const p2 = { x: w * 0.42, y: h * 0.62 }; // dip / valley
  const p3 = { x: w * 0.85, y: h * 0.22 }; // tip (breakout high)

  // Arrowhead at tip
  const lastAngle = Math.atan2(p3.y - p2.y, p3.x - p2.x);
  const aLen = w * 0.07;
  const spread = Math.PI / 4.5;
  const arrowUp = {
    x: p3.x - aLen * Math.cos(lastAngle - spread),
    y: p3.y - aLen * Math.sin(lastAngle - spread),
  };
  const arrowDown = {
    x: p3.x - aLen * Math.cos(lastAngle + spread),
    y: p3.y - aLen * Math.sin(lastAngle + spread),
  };

  // 5 segments with particle distribution weights
  const segs = [
    { a: p0, b: p1 },       // initial rise
    { a: p1, b: p2 },       // dip
    { a: p2, b: p3 },       // breakout
    { a: p3, b: arrowUp },  // arrowhead upper
    { a: p3, b: arrowDown },// arrowhead lower
  ];
  const weights = [0.22, 0.18, 0.38, 0.11, 0.11];
  const counts = weights.map((wt, i) =>
    i < weights.length - 1
      ? Math.floor(ps.length * wt)
      : ps.length - weights.slice(0, -1).reduce((s, w2) => s + Math.floor(ps.length * w2), 0)
  );

  let idx = 0;
  for (let si = 0; si < segs.length; si++) {
    const s = segs[si];
    const n = counts[si];
    for (let j = 0; j < n && idx < ps.length; j++, idx++) {
      const f = n > 1 ? j / (n - 1) : 0;
      ps[idx].tx =
        s.a.x + (s.b.x - s.a.x) * f + (Math.random() - 0.5) * 5;
      ps[idx].ty =
        s.a.y + (s.b.y - s.a.y) * f + (Math.random() - 0.5) * 5;
    }
  }
}

/* ── Component ──────────────────────────────────────────── */
export default function ParticleCanvas({
  particleCount = 300,
  enableShapeFormation = false,
  followCursor = true,
  className = "",
}: ParticleCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    /* Reduced motion */
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = mq.matches;
    const onMQ = (e: MediaQueryListEvent) => {
      reduced = e.matches;
    };
    mq.addEventListener("change", onMQ);

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? Math.min(particleCount, 100) : particleCount;

    /* Dimensions */
    let rect = parent.getBoundingClientRect();
    let W = rect.width;
    let H = rect.height;

    /* ── Three.js setup ─────────────────────────────────── */
    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new OrthographicCamera(0, W, H, 0, -10, 10);
    camera.position.z = 1;

    /* Circle geometry (unit radius, used as dots) */
    const geo = new CircleGeometry(0.5, 16);

    /* Shader: per-instance color + alpha */
    const mat = new ShaderMaterial({
      vertexShader: `
        attribute vec3 aColor;
        attribute float aAlpha;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          gl_FragColor = vec4(vColor, vAlpha);
        }
      `,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new InstancedMesh(geo, mat, count);
    mesh.frustumCulled = false;
    scene.add(mesh);

    /* Per-instance data buffers */
    const colors = new Float32Array(count * 3);
    const alphas = new Float32Array(count);
    const colorAttr = new InstancedBufferAttribute(colors, 3);
    const alphaAttr = new InstancedBufferAttribute(alphas, 1);
    geo.setAttribute("aColor", colorAttr);
    geo.setAttribute("aAlpha", alphaAttr);

    /* ── Create particles: FILLED DISC distribution ─────── */
    // sqrt(random) gives uniform area distribution within a circle
    let maxR = Math.min(W, H) * 0.38;

    const particles: P[] = [];
    for (let i = 0; i < count; i++) {
      const homeAngle = Math.random() * Math.PI * 2;
      // uniform area distribution — more particles at outer radii
      const homeRadius = Math.sqrt(Math.random());

      const c = PAL[Math.floor(Math.random() * PAL.length)];

      // Alpha based on distance from center:
      // center particles are lighter, outer ones are more opaque
      const baseAlpha = 0.15 + homeRadius * 0.7;
      const dotSize = 3 + Math.random() * 5;

      particles.push({
        homeAngle,
        homeRadius,
        x: 0,
        y: 0,
        w: dotSize,
        h: dotSize,
        rot: 0,
        cr: c[0],
        cg: c[1],
        cb: c[2],
        alpha: baseAlpha,
        baseAlpha,
        phase: Math.random() * Math.PI * 2,
        tx: 0,
        ty: 0,
      });
      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }

    /* Blob center (follows cursor) */
    let blobCx = W / 2;
    let blobCy = H / 2;

    /* Initialize positions */
    for (const p of particles) {
      const r = p.homeRadius * maxR;
      p.x = blobCx + Math.cos(p.homeAngle) * r;
      p.y = blobCy + Math.sin(p.homeAngle) * r;
    }

    if (enableShapeFormation) calcW(particles, W, H);

    /* Cursor */
    const cursor = { x: -9999, y: -9999, on: false };

    /* Matrix helper */
    const dummy = new Object3D();

    function syncInstances() {
      for (let i = 0; i < count; i++) {
        const p = particles[i];
        dummy.position.set(p.x, H - p.y, 0);
        dummy.rotation.set(0, 0, -p.rot);
        dummy.scale.set(p.w, p.h, 1);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        alphas[i] = p.alpha;
      }
      mesh.instanceMatrix.needsUpdate = true;
      alphaAttr.needsUpdate = true;
    }

    /* ── Animation loop ─────────────────────────────────── */
    let raf = 0;
    let prevBx = blobCx;
    let prevBy = blobCy;

    const animate = () => {
      if (reduced) {
        syncInstances();
        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
        return;
      }

      const t = Date.now() / 1000;

      /* Blob follows cursor — 60% influence, smooth lerp */
      const cx = W / 2,
        cy = H / 2;
      const tcx = followCursor && cursor.on ? cx + (cursor.x - cx) * 0.6 : cx;
      const tcy = followCursor && cursor.on ? cy + (cursor.y - cy) * 0.6 : cy;
      blobCx += (tcx - blobCx) * 0.06;
      blobCy += (tcy - blobCy) * 0.06;

      /* Velocity of the blob center */
      const vx = blobCx - prevBx;
      const vy = blobCy - prevBy;
      prevBx = blobCx;
      prevBy = blobCy;
      const speed = Math.sqrt(vx * vx + vy * vy);
      const moveAngle = Math.atan2(vy, vx);

      /* Shape formation only when cursor is over center content zone */
      const inCenter =
        cursor.on &&
        cursor.x > W * 0.25 &&
        cursor.x < W * 0.75 &&
        cursor.y > H * 0.15 &&
        cursor.y < H * 0.85;

      if (enableShapeFormation && inCenter) {
        /* Shape formation mode */
        for (const p of particles) {
          p.x += (p.tx - p.x) * 0.05;
          p.y += (p.ty - p.y) * 0.05;
        }
      } else {
        /* ── Filled disc with breathing + elastic wave ──── */

        // Breathing: whole disc expands/contracts (±18%)
        const breathScale = 1 + Math.sin(t * 0.7) * 0.18;

        // Secondary faster breath
        const breath2 = 1 + Math.cos(t * 1.8) * 0.06;

        for (const p of particles) {
          // Traveling wave: 2 peaks rotate around the disc
          const wave =
            Math.sin(p.homeAngle * 2 - t * 1.2) * 0.12 * p.homeRadius;

          // ── Elastic deformation from cursor movement ──
          // Outer particles lag behind more (jelly effect)
          const lagAmount = p.homeRadius * 18;
          const effCx = blobCx - vx * lagAmount;
          const effCy = blobCy - vy * lagAmount;

          // Directional stretch: particles ahead of movement
          // push outward, particles behind pull inward
          const angleDiff = p.homeAngle - moveAngle;
          const stretch = Math.cos(angleDiff) * speed * 0.4 * p.homeRadius;

          // Each particle's current radius
          const r =
            p.homeRadius * maxR * breathScale * breath2 +
            wave * maxR +
            stretch;

          // Subtle noise jitter
          const jx = noise(p.homeAngle * 3, t * 0.15) * 2;
          const jy = noise(p.homeAngle * 3 + 99, t * 0.15) * 2;

          const targetX = effCx + Math.cos(p.homeAngle) * r + jx;
          const targetY = effCy + Math.sin(p.homeAngle) * r + jy;

          // Variable lerp: center catches up fast, edges lag
          const lerp = 0.04 + (1 - p.homeRadius) * 0.08;
          p.x += (targetX - p.x) * lerp;
          p.y += (targetY - p.y) * lerp;

          /* Dots don't need rotation */

          /* Alpha: center fades during expansion */
          const expansionFade =
            1 - (1 - p.homeRadius) * (breathScale - 1) * 2;
          const clampedFade = Math.max(0.08, Math.min(1, expansionFade));
          p.alpha =
            p.baseAlpha *
            clampedFade *
            (0.85 + 0.15 * Math.sin(t * 1.0 + p.phase));
        }
      }

      syncInstances();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    /* ── Event listeners ────────────────────────────────── */
    const onMove = (e: MouseEvent) => {
      const r = renderer.domElement.getBoundingClientRect();
      cursor.x = e.clientX - r.left;
      cursor.y = e.clientY - r.top;
      cursor.on =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
    };
    const onLeave = () => {
      cursor.on = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    /* Resize */
    const ro = new ResizeObserver(() => {
      rect = parent.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      renderer.setSize(W, H);
      camera.right = W;
      camera.top = H;
      camera.updateProjectionMatrix();
      maxR = Math.min(W, H) * 0.38;
      if (enableShapeFormation) calcW(particles, W, H);
    });
    ro.observe(parent);

    /* Cleanup */
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      mq.removeEventListener("change", onMQ);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [particleCount, enableShapeFormation, followCursor]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      role="presentation"
    />
  );
}
