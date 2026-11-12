"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CSSProperties, ReactNode } from "react";

let registered = false;

function ensureRegister() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export type RevealVariant = "fade" | "up" | "left" | "right" | "zoom";

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  once?: boolean;
  className?: string;
  start?: string;
  style?: CSSProperties;
};

const FROM: Record<RevealVariant, gsap.TweenVars> = {
  fade: { opacity: 0 },
  up: { opacity: 0, y: 64 },
  left: { opacity: 0, x: -56 },
  right: { opacity: 0, x: 56 },
  zoom: { opacity: 0, scale: 0.9 },
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  once = false,
  className,
  start = "top 88%",
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ensureRegister();
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        FROM[variant],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: delay / 1000,
          ease: "power3.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [variant, delay, once, start]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
