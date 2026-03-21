// Particle ring system inspired by antigravity.google
// Particles form a ring/torus that follows the cursor and breathes

export interface Particle {
  // Position in ring (polar, relative to ring center)
  angle: number; // fixed angle around ring
  radiusOffset: number; // random offset from ring radius
  // Current screen position
  x: number;
  y: number;
  // Visual
  width: number; // dash width
  height: number; // dash height
  rotation: number; // current rotation
  color: string;
  alpha: number;
  phase: number; // for noise/breathing offset
  // For shape formation (CTA)
  targetX: number;
  targetY: number;
}

// Brand-aligned multi-color palette
const COLORS = [
  "139, 37, 0", // brand red
  "139, 37, 0", // brand red (weighted)
  "160, 50, 15", // warm red
  "80, 100, 145", // muted blue
  "180, 120, 40", // amber
  "100, 130, 90", // sage
];

export interface RingState {
  cx: number; // current ring center x
  cy: number; // current ring center y
  baseRadius: number; // base ring radius
}

export function createRingState(width: number, height: number): RingState {
  return {
    cx: width / 2,
    cy: height / 2,
    baseRadius: Math.min(width, height) * 0.28,
  };
}

export function createParticles(count: number): Particle[] {
  const particles: Particle[] = [];

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
    // Gaussian-ish offset from ring center line
    const radiusOffset = (Math.random() + Math.random() - 1) * 40;

    particles.push({
      angle,
      radiusOffset,
      x: 0,
      y: 0,
      width: 3 + Math.random() * 6,
      height: 1.5 + Math.random() * 1,
      rotation: 0,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 0.3 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
      targetX: 0,
      targetY: 0,
    });
  }
  return particles;
}

// Simple 2D noise approximation (good enough for organic jitter)
function noise2D(x: number, y: number): number {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return (n - Math.floor(n)) * 2 - 1;
}

export function updateRing(
  ring: RingState,
  cursorX: number,
  cursorY: number,
  cursorOnCanvas: boolean,
  canvasWidth: number,
  canvasHeight: number
): void {
  // Ring center drifts toward cursor (2% per frame, like antigravity)
  // Cursor influence is subtle — 17.5% of cursor offset (not 1:1)
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  let targetX: number;
  let targetY: number;

  if (cursorOnCanvas) {
    targetX = centerX + (cursorX - centerX) * 0.175;
    targetY = centerY + (cursorY - centerY) * 0.175;
  } else {
    targetX = centerX;
    targetY = centerY;
  }

  ring.cx += (targetX - ring.cx) * 0.02;
  ring.cy += (targetY - ring.cy) * 0.02;
}

export function updateParticles(
  particles: Particle[],
  ring: RingState,
  now: number
): void {
  const time = now / 1000;

  // Breathing: ring radius oscillates
  const breathRadius =
    ring.baseRadius +
    Math.sin(time * 1.0) * ring.baseRadius * 0.08 +
    Math.cos(time * 3.0) * ring.baseRadius * 0.04;

  for (const p of particles) {
    // Per-particle noise displacement
    const noiseX =
      noise2D(p.angle * 4, time * 0.35) * 12 +
      Math.sin(p.angle * 20 + time * 4) * 4;
    const noiseY =
      noise2D(p.angle * 4 + 100, time * 0.35) * 12 +
      Math.cos(p.angle * 20 + time * 3) * 4;

    // Position on ring
    const r = breathRadius + p.radiusOffset;
    const targetX = ring.cx + Math.cos(p.angle) * r + noiseX;
    const targetY = ring.cy + Math.sin(p.angle) * r + noiseY;

    // Smooth toward target
    p.x += (targetX - p.x) * 0.08;
    p.y += (targetY - p.y) * 0.08;

    // Rotation: align radially with some noise wobble
    const radialAngle = Math.atan2(p.y - ring.cy, p.x - ring.cx);
    const noiseAngle = noise2D(p.angle * 10, time * 0.5) * 0.5;
    p.rotation = radialAngle + noiseAngle;

    // Alpha pulsing (subtle)
    p.alpha =
      0.3 + 0.4 * (0.5 + 0.5 * Math.sin(time * 2 + p.phase));
  }
}

export function updateShapeFormation(
  particle: Particle,
  isForming: boolean,
  homeX: number,
  homeY: number
): void {
  if (isForming) {
    particle.x += (particle.targetX - particle.x) * 0.05;
    particle.y += (particle.targetY - particle.y) * 0.05;
  } else {
    particle.x += (homeX - particle.x) * 0.08;
    particle.y += (homeY - particle.y) * 0.08;
  }
}

export function calculateWTargets(
  particles: Particle[],
  canvasWidth: number,
  canvasHeight: number
): void {
  const margin = canvasWidth * 0.2;
  const top = canvasHeight * 0.3;
  const bottom = canvasHeight * 0.7;
  const mid = canvasHeight * 0.5;
  const w = canvasWidth - margin * 2;

  const points = [
    { x: margin, y: top },
    { x: margin + w * 0.25, y: bottom },
    { x: margin + w * 0.5, y: mid },
    { x: margin + w * 0.75, y: bottom },
    { x: margin + w, y: top },
  ];

  const segments = [
    { from: points[0], to: points[1] },
    { from: points[1], to: points[2] },
    { from: points[2], to: points[3] },
    { from: points[3], to: points[4] },
  ];

  const perSeg = Math.floor(particles.length / 4);
  for (let i = 0; i < particles.length; i++) {
    const si = Math.min(Math.floor(i / perSeg), 3);
    const s = segments[si];
    const t = (i % perSeg) / perSeg;
    particles[i].targetX =
      s.from.x + (s.to.x - s.from.x) * t + (Math.random() - 0.5) * 4;
    particles[i].targetY =
      s.from.y + (s.to.y - s.from.y) * t + (Math.random() - 0.5) * 4;
  }
}

export function drawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[]
): void {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (const p of particles) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.alpha;

    // Draw pill/dash shape (rounded rect)
    const w = p.width;
    const h = p.height;
    const r = h / 2;
    ctx.fillStyle = `rgb(${p.color})`;
    ctx.beginPath();
    ctx.moveTo(-w / 2 + r, -h / 2);
    ctx.lineTo(w / 2 - r, -h / 2);
    ctx.arc(w / 2 - r, 0, r, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(-w / 2 + r, h / 2);
    ctx.arc(-w / 2 + r, 0, r, Math.PI / 2, -Math.PI / 2);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
}
