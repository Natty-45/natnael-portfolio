"use client";

import { useState, useRef, useEffect, useActionState } from "react";
import { SITE } from "@/data/site";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "./icons";
import { sendContactEmail } from "@/app/actions/send-email";
import styles from "./contact.module.css";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (open) el.showModal();
    else el.close();
  }, [open]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onClose = () => setOpen(false);
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, []);

  useEffect(() => {
    if (state?.success && formRef.current) formRef.current.reset();
  }, [state]);

  const closeModal = () => setOpen(false);

  return (
    <section className={styles.section} id="contact">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.meta}>
            <span className={styles.metaIndex}>04</span>
            <span>Contact</span>
            <span className={styles.metaRule} aria-hidden="true" />
          </p>

          <h2 className={styles.title}>
            Let&apos;s build something
            <br />
            people <em>actually use.</em>
          </h2>

          <p className={styles.lead}>
            No pitch deck needed. Tell me what you&apos;re trying to build,
            what&apos;s in the way, and I&apos;ll tell you how I can help.
          </p>

          <div className={styles.actions}>
            <button
              className="btn btnCanary"
              onClick={() => setOpen(true)}
              type="button"
            >
              Send a message
              <ArrowUpRightIcon />
            </button>
            <a className="btn btnOutlineDark" href={`mailto:${SITE.email}`}>
              Email directly
            </a>
          </div>

          <p className={styles.note}>
            Based in Addis Ababa · GMT+3 · I usually reply within a day.
          </p>
        </div>

        <div className={styles.panel}>
          <span className={styles.panelLabel}>Direct lines</span>

          <a className={styles.panelRow} href={`mailto:${SITE.email}`}>
            <span className={styles.panelIcon}>
              <MailIcon />
            </span>
            <span className={styles.panelText}>
              <span>Email</span>
              <strong>{SITE.email}</strong>
            </span>
            <ArrowUpRightIcon className={styles.panelArrow} />
          </a>

          <a
            className={styles.panelRow}
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.panelIcon}>
              <GithubIcon />
            </span>
            <span className={styles.panelText}>
              <span>GitHub</span>
              <strong>@Natty-45</strong>
            </span>
            <ArrowUpRightIcon className={styles.panelArrow} />
          </a>

          <a
            className={styles.panelRow}
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.panelIcon}>
              <LinkedinIcon />
            </span>
            <span className={styles.panelText}>
              <span>LinkedIn</span>
              <strong>Natnael Ayalew</strong>
            </span>
            <ArrowUpRightIcon className={styles.panelArrow} />
          </a>

          <div className={styles.panelRowStatic}>
            <span className={styles.panelIcon}>
              <MapPinIcon />
            </span>
            <span className={styles.panelText}>
              <span>Location</span>
              <strong>Addis Ababa, Ethiopia</strong>
            </span>
          </div>

          <div className={styles.statusBox}>
            <span className={styles.statusDot} />
            {SITE.status}
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.modal}
        aria-labelledby="contact-dialog-title"
      >
        <div className={styles.modalInner}>
          <div className={styles.modalHeader}>
            <div>
              <span className={styles.modalLabel}>New message</span>
              <h3 className={styles.modalTitle} id="contact-dialog-title">
                Tell me about it.
              </h3>
            </div>
            <button
              className={styles.modalClose}
              onClick={closeModal}
              type="button"
              aria-label="Close"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {state?.success ? (
            <div className={styles.successBox}>
              <span className={styles.successIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </span>
              <p className={styles.successText}>
                Message sent. I&apos;ll get back to you soon.
              </p>
              <button className="btn btnPrimary" onClick={closeModal} type="button">
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
                  placeholder="What are you building?"
                  required
                />
              </div>
              {state?.error && <p className={styles.errorText}>{state.error}</p>}
              <button
                className={`btn btnPrimary ${styles.submitBtn}`}
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </section>
  );
}
