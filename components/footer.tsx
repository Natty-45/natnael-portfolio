import { SITE, SOCIALS } from "@/data/site";
import Link from "next/link";
import {
  ArrowUpIcon,
  ClockIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "./icons";
import LocalTime from "./local-time";
import styles from "./footer.module.css";

const ICONS = { email: MailIcon, github: GithubIcon, linkedin: LinkedinIcon };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            N
          </span>
          <div className={styles.brandText}>
            <strong>
              © {year} {SITE.name}
            </strong>
            <span>Full-stack software engineer</span>
          </div>
        </div>

        <p className={styles.made}>
          Built with Next.js &amp; CSS Modules
          <span className={styles.divider} aria-hidden="true">
            /
          </span>
          <MapPinIcon />
          {SITE.location}
          <span className={styles.divider} aria-hidden="true">
            /
          </span>
          <ClockIcon />
          <LocalTime timezone={SITE.timezone} /> local
        </p>

        <div className={styles.right}>
          <div className={styles.socials}>
            {SOCIALS.map(({ key, href }) => {
              const Icon = ICONS[key];
              return (
                <a
                  key={key}
                  href={href}
                  {...(key !== "email"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={key}
                  className={styles.social}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <Link className={styles.top} href="/#top" aria-label="Back to top">
            <ArrowUpIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
