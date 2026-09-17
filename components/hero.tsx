"use client";

import { useEffect, useRef } from "react";
import styles from "./hero.module.css";

const TYPING_TEXTS = [
  "Full-Stack Developer",
  "Web & Mobile Builder",
  "Problem Solver",
  "Creative Coder",
];

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const textEl = el;

    function typeCycle(): void {
      const text = TYPING_TEXTS[textIndexRef.current];

      if (!isDeletingRef.current) {
        charIndexRef.current++;
        if (charIndexRef.current > text.length) {
          isDeletingRef.current = true;
          setTimeout(typeCycle, 2000);
          return;
        }
      } else {
        charIndexRef.current--;
        if (charIndexRef.current < 0) {
          isDeletingRef.current = false;
          textIndexRef.current = (textIndexRef.current + 1) % TYPING_TEXTS.length;
          setTimeout(typeCycle, 500);
          return;
        }
      }

      textEl.textContent = text.slice(0, charIndexRef.current);
      const speed = isDeletingRef.current ? 30 : 80;
      intervalRef.current = window.setTimeout(typeCycle, speed);
    }

    intervalRef.current = window.setTimeout(typeCycle, 1000);

    return () => {
      if (intervalRef.current !== null) window.clearTimeout(intervalRef.current);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bgOrbs}>
        <div className={styles.orb} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>
      <div className={styles.gridLines} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>Hi, my name is</p>
        <h1 className={styles.name}>Natnael Ayalew</h1>
        <div className={styles.tagline}>
          I&apos;m a{" "}
          <span ref={textRef} className={styles.typedText} />
        </div>
        <p className={styles.subtitle}>
          Building performant web and mobile applications with modern
          technologies. I craft clean, scalable code and thoughtful
          user experiences.
        </p>
        <a href="#work" className={styles.cta}>
          View My Work
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
