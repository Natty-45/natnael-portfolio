"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./terminal.module.css";

type TermLine = { text: string; cls?: string; pause?: number };

const TERM_LINES: TermLine[] = [
  { text: "$ ./deploy.sh --portfolio", cls: "cmd", pause: 600 },
  { text: "[1/5] resolving modules ............ done", pause: 100 },
  { text: "[2/5] running unit tests ........... 42 passed", pause: 100 },
  { text: "[3/5] optimizing bundle ............ 184.6 kb", pause: 100 },
  { text: "[4/5] auditing accessibility ....... 0 errors", pause: 100 },
  { text: "[5/5] shipping to production ....... done", pause: 320 },
  { text: "" },
  { text: "\u2713 portfolio deployed in 2.41s", cls: "ok" },
];

const OFFSETS: number[] = [];
let totalChars = 0;
for (const line of TERM_LINES) {
  OFFSETS.push(totalChars);
  totalChars += line.text.length;
}

function lineIndexOf(pos: number): number {
  for (let i = OFFSETS.length - 1; i >= 0; i--) {
    if (pos >= OFFSETS[i]) return i;
  }
  return 0;
}

export default function Terminal() {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const timer = useRef<number | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(totalChars);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        io.disconnect();
        started.current = true;

        let pos = 0;
        const tick = () => {
          if (pos >= totalChars) return;
          const idx = lineIndexOf(pos);
          const line = TERM_LINES[idx];
          const char = line.text[pos - OFFSETS[idx]];
          const finishedLine = pos - OFFSETS[idx] === line.text.length - 1;
          pos += 1;
          setCount(pos);
          const pause = finishedLine ? line.pause ?? 30 : 0;
          const base = char === "." ? 24 : 13;
          timer.current = window.setTimeout(tick, pause || base);
        };
        tick();
      },
      { threshold: 0.3 }
    );
    io.observe(box);

    return () => {
      io.disconnect();
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  const isActiveLine = (i: number) =>
    count >= OFFSETS[i] && count <= OFFSETS[i] + TERM_LINES[i].text.length;

  return (
    <div className={styles.term} ref={boxRef}>
      <div className={styles.bar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.path}>natnael@portfolio: ~</span>
      </div>
      <div
        className={styles.body}
        role="img"
        aria-label="Terminal window showing a deploy script running successfully"
      >
        {TERM_LINES.map((line, i) => {
          const revealed = Math.max(
            0,
            Math.min(count - OFFSETS[i], line.text.length)
          );
          const cls = line.cls ? styles[line.cls] : "";
          return (
            <div key={i} className={`${styles.line} ${cls}`.trim()}>
              {line.text.slice(0, revealed)}
              {isActiveLine(i) && <span className={styles.cursor} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}