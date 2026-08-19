import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import styles from "./footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.item}>© {year} Natnael Ayalew</p>
        <p className={`${styles.item} ${styles.mid}`}>built with Next.js</p>
        <p className={`${styles.item} ${styles.status}`}>
          <span className={styles.dot} aria-hidden="true" />
          available for work
        </p>
        {/* EDIT: replace with your real social links */}
        <div className={styles.socials}>
          <a href="mailto:hello@natnaelayalew.com" aria-label="Email" className={styles.social}>
            <MailIcon />
          </a>
          <a
            href="https://github.com/natnaelayalew"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className={styles.social}
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/natnaelayalew"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className={styles.social}
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}