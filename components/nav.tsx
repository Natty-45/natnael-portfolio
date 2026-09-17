"use client";

import { useEffect, useState, useCallback } from "react";
import { NAV_LINKS, SOCIALS, SITE } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import styles from "./nav.module.css";

const ICONS = { email: MailIcon, github: GithubIcon, linkedin: LinkedinIcon };

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    setScrolled(y > 40);
    setScrollProgress(maxScroll > 0 ? (y / maxScroll) * 100 : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  const socials = SOCIALS.map(({ key, href }) => {
    const Icon = ICONS[key];
    return { key, href, Icon };
  });

  return (
    <>
      <header className={`${styles.topbar} ${scrolled ? styles.scrolled : ""} ${open ? styles.topbarOpen : ""}`.trim()}>
        <div className={styles.scrollBar} style={{ width: `${scrollProgress}%` }} />
        <a className={styles.logo} href="#about" onClick={close}>
          <span className={styles.logoIcon}>&gt;_</span>
          <span className={styles.logoName}>{SITE.name}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`${styles.navLink} ${active === link.href ? styles.navLinkActive : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.desktopSocials}>
            {socials.map(({ key, href, Icon }) => (
              <a
                key={key}
                href={href}
                {...(key !== "email" ? { target: "_blank", rel: "noopener" } : {})}
                aria-label={key}
                className={styles.socialIcon}
              >
                <Icon />
              </a>
            ))}
          </div>
          <button
            className={styles.burger}
            aria-expanded={open}
            aria-controls="mobileMenu"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className={styles.mobileMenu} id="mobileMenu">
          <nav className={styles.mobileLinks} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={close} className={styles.mobileLink}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.mobileSocials}>
            {socials.map(({ key, href, Icon }) => (
              <a key={key} href={href} {...(key !== "email" ? { target: "_blank", rel: "noopener" } : {})} aria-label={key} className={styles.mobileSocialIcon}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
