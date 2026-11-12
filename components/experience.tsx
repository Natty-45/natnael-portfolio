import { EDUCATION, LANGUAGES, SITE } from "@/data/site";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import Parallax from "./parallax";
import { DownloadIcon, MapPinIcon } from "./icons";
import styles from "./experience.module.css";

const JOBS = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent",
    location: "Remote · Addis Ababa",
    period: "2023 — Now",
    current: true,
    description: "End-to-end product work for founders and small businesses.",
    tech: ["React", "Next.js", "Node.js", "Django"],
  },
  {
    role: "IT Support",
    company: "Melo Plus Trading",
    location: "Addis Ababa",
    period: "2025 — 2026",
    current: false,
    description: "Kept business systems, devices and networks running.",
    tech: ["IT Support", "Systems", "Networking"],
  },
  {
    role: "Frontend Developer",
    company: "BT Creative",
    location: "Addis Ababa",
    period: "May — Nov 2025",
    current: false,
    description: "Built responsive client sites with modern frontend tooling.",
    tech: ["React", "Next.js", "TypeScript"],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal>
          <SectionHead
            index="02"
            label="Experience"
            title={
              <>
                Where I&apos;ve
                <br />
                <em>shipped.</em>
              </>
            }
            sub="Client work, studio work and the support role that taught me how systems break."
          />
        </Reveal>

        <div className={styles.timeline}>
          {JOBS.map((job, i) => (
            <Reveal key={`${job.company}-${job.role}`} delay={i * 70} variant="left">
              <article className={styles.job}>
                <div className={styles.jobHead}>
                  <span className={styles.period}>{job.period}</span>
                  {job.current && (
                    <span className={styles.current}>
                      <span className={styles.currentDot} />
                      Currently
                    </span>
                  )}
                </div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>
                  {job.company}
                  <span className={styles.sep}>·</span>
                  <MapPinIcon />
                  {job.location}
                </p>
                <p className={styles.description}>{job.description}</p>
                <ul className={styles.tech} role="list">
                  {job.tech.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} variant="up">
          <Parallax speed={0.04}>
          <div className={styles.background}>
            <div className={styles.backgroundItem}>
              <span className={styles.backgroundLabel}>Education</span>
              <strong>{EDUCATION.degree}</strong>
              <p>
                {EDUCATION.school} · {EDUCATION.period} · {EDUCATION.grade}
              </p>
            </div>

            <div className={styles.backgroundItem}>
              <span className={styles.backgroundLabel}>Languages</span>
              <strong>
                {LANGUAGES.map((language) => language.name).join(" · ")}
              </strong>
              <p>{LANGUAGES.map((language) => language.level).join(" · ")}</p>
            </div>

            <div className={styles.backgroundItem}>
              <span className={styles.backgroundLabel}>Résumé</span>
              <p>Education, experience and toolkit in one PDF.</p>
              <a
                className={`btn btnCanary ${styles.cvBtn}`}
                href={`/${SITE.resumeFile}`}
                download={SITE.resumeFile}
              >
                Download CV
                <DownloadIcon />
              </a>
            </div>
          </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
