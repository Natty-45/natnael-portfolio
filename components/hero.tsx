import Terminal from "./terminal";
import buttons from "./buttons.module.css";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-label="Introduction">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={`eyebrow ${styles.eyebrow}`}>
            <i>›</i> hello, i'm
          </p>
          <h1 className={styles.name}>
            Natnael
            <br />
            Ayalew<span className={styles.cursor} aria-hidden="true" />
          </h1>
          <p className={styles.tagline}>
            Full-Stack Developer building scalable web applications.
          </p>
          <p className={styles.value}>
            I take products from first commit to production: APIs that hold up,
            interfaces people don't have to think about, and deployments that
            don't keep anyone awake.
          </p>

          <div className={styles.actions}>
            <a className={`${buttons.btn} ${buttons.primary}`} href="#projects">
              View Projects
            </a>
            <a className={`${buttons.btn} ${buttons.ghost}`} href="#contact">
              Contact Me
            </a>
          </div>

          {/* EDIT: location / availability */}
          <p className={styles.meta}>open to freelance &amp; remote work — worldwide</p>
        </div>

        <Terminal />
      </div>
    </section>
  );
}