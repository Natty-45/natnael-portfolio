"use client";

import { useState } from "react";
import styles from "./cv.module.css";

const CV_FILES = [
  {
    label: "Education Background",
    fileName: "Natnael-Ayalew-CV.pdf",
    description: "Natnael Ayalew — Software Engineer | Full-Stack. View my education, experience, and skills.",
  },
];

export default function CV() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.section} id="cv">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>resume</p>
          <h2 className={styles.title}>Download My CV</h2>
          <p className={styles.sub}>
            Click below to view or download my latest resume document.
          </p>
        </div>

        <div className={styles.grid}>
          {CV_FILES.map((file, i) => (
            <a
              key={file.fileName}
              href={`/${file.fileName}`}
              download={file.fileName}
              className={`${styles.card} ${activeTab === i ? styles.cardActive : ""}`}
              onClick={() => setActiveTab(i)}
            >
              <div className={styles.cardGlow} />
              <div className={styles.cardInner}>
                <div className={styles.icon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>{file.label}</h3>
                <p className={styles.cardDesc}>{file.description}</p>
                <span className={styles.btn}>Download</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
