import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./about.module.css";

/* EDIT: swap these chips for your real tech + real icons if you have them */
const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "GraphQL",
  "Docker",
  "AWS",
  "Jest",
  "Git",
  "Tailwind CSS",
  "Vite",
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <Reveal>
        <SectionHead number="01" label="about" title="A little about me" />
      </Reveal>

      <Reveal className={styles.bio}>
        <p>
          I'm Natnael, a full-stack developer who likes seeing a product
          through the whole journey — from the first{" "}
          <code className="code">git init</code> to the day the people who need
          it are actually using it. My home turf is the stack that connects a
          database to a browser: React on the front, Node.js on the back, and
          whatever it takes in between.
        </p>
        <p>
          I work in small, deliberately simple modules. Each one has a clear
          job, a few tests that matter, and a deployment path that doesn't
          need a manual. Boring in the right places makes the interesting
          parts work — and it means the code is easy to change when
          requirements change, which they always do.
        </p>
        <p>
          These days I'm building a complete booking and management system
          for an auto shop: customers, vehicles, job cards, inventory and
          billing, with role-based access for the whole shop floor. I'm
          equally happy talking API design, performance budgets, or why your
          database indexes are the actual problem.
        </p>
      </Reveal>

      <Reveal delay={80} className={styles.skills}>
        <p className={styles.skillsLabel}>Toolbox — the things I reach for daily</p>
        <ul className={styles.skillGrid} role="list">
          {SKILLS.map((skill) => (
            <li key={skill} className={styles.skillChip}>
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}