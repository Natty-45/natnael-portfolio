import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <Reveal>
        <SectionHead label="about" title="About" />
      </Reveal>

      <Reveal className={styles.bio}>
        <p>
          Hi there! I&apos;m Natnael, and I like building things. I&apos;m a
          full-stack developer with expertise in building accessible,
          performant web and mobile applications. I take pride in creating
          thoughtful, well-crafted products and have a sharp eye for the
          little details that separate a good product from an exceptional one.
        </p>
        <p>
          Currently, I&apos;m building a complete garage management system —
          booking, job cards, inventory, billing — with role-based access for
          the whole shop team, plus mobile apps for on-site crews.
        </p>
        <p>
          Previously, I&apos;ve worked across a wide range of environments —
          from product studios to agencies — shipping React, React Native, and
          Node.js features across 8+ client products: dashboards, booking
          flows, admin tools, integrations, and companion mobile apps.
        </p>
        <p>
          I work in small, deliberately simple modules. Each one has a clear
          job, a few tests that matter, and a deployment path that doesn&apos;t
          need a manual. Boring in the right places makes the interesting parts
          work — and it means the code is easy to change when requirements
          change, which they always do.
        </p>
      </Reveal>
    </section>
  );
}
