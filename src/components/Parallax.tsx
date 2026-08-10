import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Background image that drifts slower than the page scroll. */
export function ParallaxSection({
  image,
  speed = 0.25,
  className,
  overlayClassName,
  children,
}: {
  image: string;
  speed?: number;
  className?: string;
  overlayClassName?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      const layer = layerRef.current;
      if (!el || !layer) return;
      const rect = el.getBoundingClientRect();
      const raw = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      const limit = rect.height * 0.28;
      const offset = Math.max(-limit, Math.min(limit, raw));
      layer.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("relative isolate overflow-hidden", className)}>
      <div
        ref={layerRef}
        aria-hidden="true"
        className="parallax-layer absolute inset-x-0 -top-[30%] -bottom-[30%] -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        aria-hidden="true"
        className={cn("absolute inset-0 -z-10", overlayClassName)}
        style={{ background: "var(--gradient-overlay)" }}
      />
      {children}
    </div>
  );
}

/** Fades + lifts content into view on scroll. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
