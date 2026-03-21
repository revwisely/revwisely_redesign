declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export function openCalendly(e?: React.MouseEvent) {
  if (e) e.preventDefault();
  if (typeof window !== "undefined" && window.Calendly) {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/chrisp-oymm/chris-preston",
    });
  }
}
