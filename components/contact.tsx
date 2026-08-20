"use client";

import { useState, useRef, useEffect, useActionState } from "react";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./contact.module.css";
import { SOCIALS } from "@/data/site";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { sendContactEmail } from "@/app/actions/send-email";

const ICONS = { email: MailIcon, github: GithubIcon, linkedin: LinkedinIcon };

export default function Contact() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    null
  );

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) {
      el.showModal();
    } else {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onClose = () => setOpen(false);
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, []);

  // Reset form on successful submission
  useEffect(() => {
    if (state?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  const closeModal = () => setOpen(false);

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

        <button
          className={styles.emailLink}
          onClick={() => {
            setOpen(true);
          }}
          type="button"
        >
          Say Hello
        </button>

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

      {/* ---- contact modal ---- */}
      <dialog ref={dialogRef} className={styles.modal}>
        <div className={styles.modalInner}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>Message me</h3>
            <button
              className={styles.modalClose}
              onClick={closeModal}
              type="button"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {state?.success ? (
            <div className={styles.successBox}>
              <svg className={styles.successIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p className={styles.successText}>Message sent! I&apos;ll get back to you soon.</p>
              <button className={styles.submitBtn} onClick={closeModal} type="button">
                Close
              </button>
            </div>
          ) : (
            <form ref={formRef} className={styles.form} action={formAction}>
              <div className={styles.field}>
                <label htmlFor="modal-name">Name</label>
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="modal-email">Email</label>
                <input
                  id="modal-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="modal-message">Message</label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={5}
                  placeholder="What's on your mind?"
                  required
                />
              </div>

              {state?.error && (
                <p className={styles.errorText}>{state.error}</p>
              )}

              <button
                className={styles.submitBtn}
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </section>
  );
}
