import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <Reveal>
          <SectionHead label="about" title="About" />
        </Reveal>

        <div className={styles.grid}>
          <Reveal delay={100} className={styles.bio}>
            <p>
              Hi there! I&apos;m Natnael, and I like building things. I&apos;m a
              software engineer with expertise in building accessible,
              performant web and mobile applications. I take pride in creating
              thoughtful, well-crafted products and have a sharp eye for the
              little details that separate a good product from an exceptional one.
            </p>
            <p>
              I started as a frontend developer and grew into full-stack,
              working across the entire product lifecycle — from UI to server
              and database. I build with React, React Native, Node.js and
              databases, and I care about shipping things that are simple,
              testable and easy to change.
            </p>
          </Reveal>
          <Reveal delay={200} className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>2</span>
              <span className={styles.statLabel}>Roles</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
