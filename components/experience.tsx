"use client";

import { useState } from "react";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./experience.module.css";

const JOBS = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    period: "2023 — Present",
    description:
      "Building web and mobile projects for clients: charity websites, landing pages, digital menus, business card sites, and a raffle app. Collaborating with teams and shipping end-to-end.",
    tech: ["React", "React Native", "Node.js", "MongoDB", "Express"],
  },
  {
    role: "IT Support",
    company: "Melo Plus Trading",
    period: "2025 — 2025",
    description:
      "Managed systems and IT infrastructure for the business, ensuring reliable operations and technical support across the team.",
    tech: ["IT Support", "Systems Admin", "Networking"],
  },
  {
    role: "Full-Stack Developer",
    company: "BT Creative",
    period: "2024 — 2025",
    description:
      "Started as a frontend developer and grew into a full-stack role, working across the entire product lifecycle — UI, server, and database. Built landing pages, a raffle app, and other client products.",
    tech: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
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
