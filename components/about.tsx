import { EDUCATION, SITE } from "@/data/site";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import { MapPinIcon } from "./icons";
import styles from "./about.module.css";

const CARD_FACTS = [
  { label: "Based", value: "Addis Ababa, Ethiopia" },
  { label: "Education", value: "BSc Computer Science" },
  { label: "Focus", value: "Web · Mobile · PWA" },
];

const TOOLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "React Native",
  "PWA",
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal>
          <SectionHead
            index="03"
            label="About"
            title={
              <>
                Full-stack,
                <br />
                <em>end to end.</em>
              </>
            }
            sub="Interface, API and data — one developer, no hand-offs."
          />
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.bio} delay={80}>
            <p className={styles.statement}>
              I&apos;m Natnael — a software engineer in Addis Ababa who turns
              rough ideas into products people can actually use.
            </p>
            <div className={styles.body}>
              <p>
                I studied Computer Science at {EDUCATION.school} and have spent
                the last few years building for real clients: charity
                platforms, event tools, NFC menus and local-commerce apps.
              </p>
            </div>

            <div className={styles.toolkit}>
              <span>Toolkit</span>
              <ul role="list">
                {TOOLS.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160} className={styles.cardWrap}>
            <aside className={styles.profileCard} aria-label="Developer profile">
              <div className={styles.cardTop}>
                <span>Developer profile</span>
                <span className={styles.cardCode}>NA / 2026</span>
              </div>

              <div className={styles.identity}>
                <span className={styles.monogram} aria-hidden="true">
                  NA
                </span>
                <div>
                  <h3>
                    {SITE.firstName}
                    <br />
                    {SITE.lastName}
                  </h3>
                  <p>Full-stack software engineer</p>
                </div>
              </div>

              <dl className={styles.facts}>
                {CARD_FACTS.map((fact) => (
                  <div key={fact.label} className={styles.fact}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
                <div className={styles.fact}>
                  <dt>Status</dt>
                  <dd className={styles.available}>
                    <span className={styles.availableDot} />
                    {SITE.status}
                  </dd>
                </div>
              </dl>

              <div className={styles.cardFoot}>
                <span className={styles.barcode} aria-hidden="true" />
                <span className={styles.cardLocation}>
                  <MapPinIcon />
                  9.03°N / 38.74°E
                </span>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
