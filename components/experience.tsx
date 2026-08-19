import { TOOLBOX } from "@/data/site";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./experience.module.css";

const TIMELINE = [
  {
    role: "Freelance Full-Stack Developer",
    meta: "2024 — Now · Independent",
    desc: "Building a complete garage management system — booking, job cards, inventory, billing — with role-based access for the whole shop team, plus mobile apps for on-site crews.",
  },
  {
    role: "Full-Stack Developer",
    meta: "2022 — 2024 · Web & mobile studio",
    desc: "Shipped React, React Native and Node features across 8+ client products: dashboards, booking flows, admin tools, integrations and companion mobile apps.",
  },
  {
    role: "Junior Web Developer",
    meta: "2021 — 2022 · Agency work",
    desc: "Learned the craft the honest way: production bugs, code reviews, and a lot of SQL.",
  },
];

export default function Experience() {
  return (
    <section className={styles.section} id="stack">
      <Reveal>
        <SectionHead
          number="02"
          label="experience"
          title="Where I've worked"
        />
      </Reveal>

      <Reveal className={styles.tools}>
        {TOOLBOX.map((group) => (
          <div key={group.name} className={styles.tool}>
            <h3 className={styles.toolName}>{group.name}</h3>
            <ul className={styles.toolTags} role="list">
              {group.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      {/* timeline is ordered by time, so numbered steps are real */}
      <Reveal delay={100} className={styles.timeline}>
        <ol className={styles.timelineList} role="list">
          {TIMELINE.map((item, i) => (
            <li key={item.role} className={styles.timelineItem}>
              <span className={styles.step} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.timelineContent}>
                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.meta}>{item.meta}</p>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}