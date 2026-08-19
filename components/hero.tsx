import { SITE } from "@/data/site";
import buttons from "./buttons.module.css";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-label="Introduction">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={`eyebrow ${styles.eyebrow}`}>
          <i>›</i> hello, i'm
        </p>
        <h1 className={styles.name}>
          Natnael
          <br />
          Ayalew<span className={styles.cursor} aria-hidden="true" />
        </h1>
        <p className={styles.tagline}>{SITE.role}.</p>
        <p className={styles.value}>
          I take products from first commit to production: APIs that hold up,
          interfaces people don't have to think about — on the web or in your
          pocket — and deployments that don't keep anyone awake.
        </p>

        <div className={styles.actions}>
          <a className={`${buttons.btn} ${buttons.primary}`} href="#projects">
            View Projects
          </a>
          <a className={`${buttons.btn} ${buttons.ghost}`} href="#contact">
            Contact Me
          </a>
        </div>

        <p className={styles.meta}>{SITE.status} — worldwide</p>
      </div>
    </section>
  );
}