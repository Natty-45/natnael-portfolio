"use client";

import { useEffect, useRef } from "react";
import styles from "./cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        cursor.style.opacity = "1";
        rx = x;
        ry = y;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, input, textarea, [role='button']");
      cursor.classList.toggle(styles.hovering, Boolean(interactive));
    };

    const loop = () => {
      rx += (x - rx) * 0.12;
      ry += (y - ry) * 0.12;
      cursor.style.transform = `translate(${rx - cursor.offsetWidth / 2}px, ${ry - cursor.offsetHeight / 2}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor} aria-hidden="true">
      <span className={styles.dot} />
    </div>
  );
}
