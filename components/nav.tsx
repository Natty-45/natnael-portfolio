"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SOCIALS, SITE } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import styles from "./nav.module.css";

const ICONS = { email: MailIcon, github: GithubIcon, linkedin: LinkedinIcon };

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

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
      {/* ---- mobile: top bar + overlay menu ---- */}
      <header
        className={`${styles.topbar} ${open ? styles.topbarOpen : ""}`.trim()}
      >
        <a className={styles.topbarName} href="#about" onClick={close}>
          {SITE.name}
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
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.mobileSocials}>
            {socials.map(({ key, href, Icon }) => (
              <a
                key={key}
                href={href}
                {...(key !== "email"
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                aria-label={key}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ---- desktop: fixed rail ---- */}
      <aside className={styles.rail}>
        <a className={styles.name} href="#about" onClick={close}>
          {SITE.name}
        </a>
        <p className={styles.tagline}>{SITE.role}.</p>

        <nav className={styles.railNav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.railFoot}>
          <div className={styles.socials}>
            {socials.map(({ key, href, Icon }) => (
              <a
                key={key}
                href={href}
                {...(key !== "email"
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                aria-label={key}
              >
                <Icon />
              </a>
            ))}
          </div>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            {SITE.status}
          </p>
        </div>
      </aside>
    </>
  );
}
