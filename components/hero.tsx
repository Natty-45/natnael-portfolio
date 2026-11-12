import { SITE } from "@/data/site";
import { ArrowRightIcon, DownloadIcon } from "./icons";
import Reveal from "./reveal";
import Parallax from "./parallax";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Parallax speed={0.08} className={styles.orbRing} aria-hidden="true">
        <span className={styles.orbRingInner} />
      </Parallax>
      <Parallax speed={-0.12} className={styles.orbBlob} aria-hidden="true">
        <span className={styles.orbBlobInner} />
      </Parallax>
      <Parallax speed={-0.18} className={styles.orbDot} aria-hidden="true">
        <span className={styles.orbDotInner} />
      </Parallax>
      <div className="wrap">
        <div className={styles.grid}>
          <Reveal variant="up" className={styles.copy}>
            <p className={styles.kicker}>
              <span className={styles.kickerDot} />
              Full-stack software engineer — Addis Ababa
            </p>

            <h1 className={styles.title}>
              <span className={styles.firstName}>Natnael</span>
              <span className={styles.lastName}>Ayalew</span>
            </h1>

            <p className={styles.lead}>
              I design and build web, mobile and digital business products —{" "}
              <mark>from the first pixel to the last database index.</mark>
            </p>

            <div className={styles.actions}>
              <a className="btn btnPrimary" href="#work">
                See selected work
                <ArrowRightIcon />
              </a>
              <a className="btn btnGhost" href={`/${SITE.resumeFile}`} download>
                Download CV
                <DownloadIcon />
              </a>
            </div>

            <ul className={styles.proof} aria-label="Quick facts">
              <li>
                <strong>7</strong>
                <span>projects shipped</span>
              </li>
              <li>
                <strong>3</strong>
                <span>team roles</span>
              </li>
              <li>
                <strong>3.41</strong>
                <span>BSc CS GPA</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
