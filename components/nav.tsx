"use client";

import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import styles from "./nav.module.css";

const LINKS = [
  { n: "01", href: "#about", label: "About" },
  { n: "02", href: "#stack", label: "Experience" },
  { n: "03", href: "#projects", label: "Projects" },
  { n: "04", href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
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

  return (
    <>
      {/* ---- mobile: top bar + overlay menu ---- */}
      <header
        className={`${styles.topbar} ${open ? styles.topbarOpen : ""}`.trim()}
      >
        <a className={styles.topbarName} href="#about" onClick={close}>
          Natnael Ayalew
        </a>
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
      </header>

      {open && (
        <div className={styles.mobileMenu} id="mobileMenu">
          <nav className={styles.mobileLinks} aria-label="Primary">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                <span className={styles.mobileNum}>{link.n}.</span>
                {link.label}
              </a>
            ))}
          </nav>
          {/* EDIT: replace with your real links */}
          <div className={styles.mobileSocials}>
            <a href="mailto:hello@natnaelayalew.com" aria-label="Email">
              <MailIcon />
            </a>
            <a
              href="https://github.com/natnaelayalew"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/natnaelayalew"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      )}

      {/* ---- desktop: sticky rail ---- */}
      <aside className={styles.rail}>
        <a className={styles.name} href="#about" onClick={close}>
          Natnael Ayalew
        </a>
        <p className={styles.tagline}>
          Full-Stack Developer building scalable web applications.
        </p>
        <p className={styles.quote}>
          I take products from first commit to production: APIs that hold up,
          interfaces people don't have to think about, and deployments that
          don't keep anyone awake.
        </p>

        <nav className={styles.railNav} aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
            >
              <span className={styles.railNum}>{link.n}.</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.railFoot}>
          <div className={styles.socials}>
            {/* EDIT: replace with your real links */}
            <a href="mailto:hello@natnaelayalew.com" aria-label="Email">
              <MailIcon />
            </a>
            <a
              href="https://github.com/natnaelayalew"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/natnaelayalew"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            available for work — open to freelance &amp; remote
          </p>
        </div>
      </aside>
    </>
  );
}