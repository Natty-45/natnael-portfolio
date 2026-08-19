"use client";

import { useState } from "react";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./experience.module.css";

const JOBS = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    period: "2024 — Present",
    description:
      "Building a complete garage management system — booking, job cards, inventory, billing — with role-based access for the whole shop team, plus mobile apps for on-site crews.",
    tech: ["React", "Node.js", "Express", "MongoDB", "React Native"],
  },
  {
    role: "Full-Stack Developer",
    company: "Web & Mobile Studio",
    period: "2022 — 2024",
    description:
      "Shipped React, React Native and Node features across 8+ client products: dashboards, booking flows, admin tools, integrations and companion mobile apps.",
    tech: ["React", "React Native", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    role: "Junior Web Developer",
    company: "Agency Work",
    period: "2021 — 2022",
    description:
      "Learned the craft the honest way: production bugs, code reviews, and a lot of SQL.",
    tech: ["JavaScript", "HTML", "CSS", "SQL"],
  },
];

export default function Experience() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className={styles.section} id="stack">
      <Reveal>
        <SectionHead label="experience" title="Where I've worked" />
      </Reveal>

      <Reveal delay={60}>
        <div className={styles.accordion}>
          {/* Tab buttons */}
          <div className={styles.tabs} role="tablist" aria-label="Job experience">
            {JOBS.map((job, i) => (
              <button
                key={job.role}
                role="tab"
                id={`tab-${i}`}
                aria-selected={i === activeIdx}
                aria-controls={`panel-${i}`}
                className={`${styles.tab} ${i === activeIdx ? styles.tabActive : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          {JOBS.map((job, i) => (
            <div
              key={job.role}
              role="tabpanel"
              id={`panel-${i}`}
              aria-labelledby={`tab-${i}`}
              hidden={i !== activeIdx}
              className={styles.panel}
            >
              <h3 className={styles.role}>
                {job.role}
                <span className={styles.at}> @ </span>
                <span className={styles.company}>{job.company}</span>
              </h3>
              <p className={styles.period}>{job.period}</p>
              <p className={styles.description}>{job.description}</p>
              <ul className={styles.tech} role="list">
                {job.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
