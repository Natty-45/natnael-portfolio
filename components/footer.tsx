import { SITE, SOCIALS } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import styles from "./footer.module.css";

const ICONS = { email: MailIcon, github: GithubIcon, linkedin: LinkedinIcon };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.item}>© {year} {SITE.name}</p>
        <p className={`${styles.item} ${styles.mid}`}>
          loosely designed in Figma and coded in Visual Studio Code by yours
          truly. built with Next.js and CSS Modules, deployed on Vercel.
        </p>
        <div className={styles.socials}>
          {SOCIALS.map(({ key, href }) => {
            const Icon = ICONS[key];
            return (
              <a
                key={key}
                href={href}
                {...(key !== "email"
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                aria-label={key}
                className={styles.social}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}