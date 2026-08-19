import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./contact.module.css";
import { SITE, SOCIALS } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const ICONS = { email: MailIcon, github: GithubIcon, linkedin: LinkedinIcon };

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <Reveal>
        <SectionHead
          label="contact"
          title="Get in touch."
          sub="Open for freelance work, full-time roles and collaborations."
        />
      </Reveal>

      <Reveal delay={60} className={styles.content}>
        <p className={styles.message}>
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back
          to you!
        </p>

        <a className={styles.emailLink} href={`mailto:${SITE.email}`}>
          Say Hello
        </a>

        <div className={styles.socials}>
          {SOCIALS.filter((s) => s.key !== "email").map(
            ({ key, href, label, external }) => {
              const Icon = ICONS[key];
              return (
                <a
                  key={key}
                  className={styles.socialLink}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener" } : {})}
                  aria-label={label}
                >
                  <Icon />
                </a>
              );
            }
          )}
        </div>
      </Reveal>
    </section>
  );
}
