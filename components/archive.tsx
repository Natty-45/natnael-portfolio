import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./archive.module.css";

const ARCHIVE = [
  {
    name: "Halcyon Theme",
    description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    tech: "100k+ Installs",
  },
  {
    name: "portfolio site",
    description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks.",
    tech: "Gatsby · Netlify",
  },
  {
    name: "Relay CLI",
    description: "Open-source task runner CLI with scheduling, retries and human-readable logs.",
    tech: "Node.js · TypeScript",
  },
];

export default function Archive() {
  return (
    <section className={styles.section} id="archive">
      <Reveal>
        <SectionHead label="archive" title="Other Noteworthy Projects" />
      </Reveal>

      <Reveal delay={60}>
        <div className={styles.list}>
          {ARCHIVE.map((item) => (
            <article key={item.name} className={styles.project}>
              <div className={styles.header}>
                <h3 className={styles.name}>{item.name}</h3>
              </div>
              <p className={styles.desc}>{item.description}</p>
              <p className={styles.tech}>{item.tech}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
