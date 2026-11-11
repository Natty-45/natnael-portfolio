"use client";

import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS, SOCIALS, SITE } from "@/data/site";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";
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
    setScrolled(y > 24);
    setScrollProgress(maxScroll > 0 ? (y / maxScroll) * 100 : 0);
  }, []);

  useEffect(() => {
    handleScroll();
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
      { rootMargin: "-35% 0px -55% 0px" }
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const socials = SOCIALS.map(({ key, href }) => ({ key, href, Icon: ICONS[key] }));

  return (
    <>
      <header
        className={`${styles.bar} ${scrolled ? styles.scrolled : ""} ${open ? styles.open : ""}`.trim()}
      >
        <span
          className={styles.progress}
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
          aria-hidden="true"
        />
        <div className={`wrap ${styles.inner}`}>
          <a className={styles.brand} href="#top" onClick={close} aria-label="Back to top">
            <span className={styles.mark} aria-hidden="true">
              N<span className={styles.markDot} />
            </span>
            <span className={styles.brandText}>
              <strong>Natnael Ayalew</strong>
              <small>Full-stack engineer</small>
            </span>
          </a>

          <nav className={styles.links} aria-label="Primary">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`${styles.link} ${active === link.href ? styles.linkActive : ""}`}
              >
                <span className={styles.linkIndex}>0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <span className={styles.status}>
              <span className={styles.pulse} />
              {SITE.availability}
            </span>
            <a className={`btn btnPrimary ${styles.talk}`} href="#contact">
              Let&apos;s talk
              <ArrowUpRightIcon />
            </a>
            <button
              className={styles.burger}
              aria-expanded={open}
              aria-controls="mobileMenu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className={styles.mobileMenu} id="mobileMenu">
          <nav className={styles.mobileLinks} aria-label="Primary">
            {NAV_LINKS.map((link, i) => (
              <a key={link.href} href={link.href} onClick={close} className={styles.mobileLink}>
                <span className={styles.mobileIndex}>0{i + 1}</span>
                {link.label}
                <ArrowUpRightIcon className={styles.mobileArrow} />
              </a>
            ))}
          </nav>

          <div className={styles.mobileFoot}>
            <a href={`mailto:${SITE.email}`} className={styles.mobileEmail}>
              {SITE.email}
            </a>
            <div className={styles.mobileSocials}>
              {socials.map(({ key, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  {...(key !== "email" ? { target: "_blank", rel: "noopener" } : {})}
                  aria-label={key}
                  className={styles.mobileSocial}
                >
                  <Icon />
                </a>
              ))}
              <span className={styles.mobileLocation}>{SITE.location}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
