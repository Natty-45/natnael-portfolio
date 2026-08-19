"use client";

import { useState, type FormEvent } from "react";
import { SITE, SOCIALS } from "@/data/site";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import buttons from "./buttons.module.css";
import styles from "./contact.module.css";

type FieldName = "name" | "email" | "message";

const ICONS = { email: MailIcon, github: GithubIcon, linkedin: LinkedinIcon };

const FIELDS: {
  name: FieldName;
  label: string;
  placeholder: string;
  type?: string;
  autocomplete?: string;
  validate: (v: string) => boolean;
  message: string;
}[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    autocomplete: "name",
    validate: (v) => v.trim().length >= 2,
    message: "Please tell me your name (at least 2 characters).",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "you@company.com",
    type: "email",
    autocomplete: "email",
    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    message: "That email doesn't look right — check the address.",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "What are you building?",
    validate: (v) => v.trim().length >= 10,
    message: "The message is a bit short — at least 10 characters.",
  },
];

const VALIDATORS: Record<FieldName, (v: string) => boolean> = {
  name: FIELDS[0].validate,
  email: FIELDS[1].validate,
  message: FIELDS[2].validate,
};

const MESSAGES: Record<FieldName, string> = {
  name: FIELDS[0].message,
  email: FIELDS[1].message,
  message: FIELDS[2].message,
};

export default function Contact() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const next: Partial<Record<FieldName, string>> = {};
    let firstInvalid: HTMLInputElement | HTMLTextAreaElement | null = null;

    for (const field of FIELDS) {
      const el = form.elements.namedItem(field.name) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      if (!VALIDATORS[field.name](el.value)) {
        next[field.name] = MESSAGES[field.name];
        if (!firstInvalid) firstInvalid = el;
      }
    }

    setErrors(next);
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const values = Object.fromEntries(
      FIELDS.map((f) => [f.name, form.elements.namedItem(f.name)])
    ) as Record<FieldName, HTMLInputElement | HTMLTextAreaElement>;

    const subject = encodeURIComponent(`Project inquiry from ${values.name.value}`);
    const body = encodeURIComponent(
      `${values.message.value}\n\n— ${values.name.value} (${values.email.value})`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const clearError = (name: FieldName) =>
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));

  return (
    <section className={styles.section} id="contact">
      <Reveal>
        <SectionHead
          number="04"
          label="contact"
          title="Let's build something."
          sub="Open to freelance work, full-time roles and collaborations. Tell me what you're building — I usually reply within a day or two."
        />
      </Reveal>

      <Reveal className={styles.iconRow} delay={60}>
        {SOCIALS.map(({ key, label, href, external }) => {
          const Icon = ICONS[key];
          return (
            <a
              key={key}
              className={styles.iconLink}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
            >
              <Icon />
              {label}
            </a>
          );
        })}
      </Reveal>

      <Reveal delay={120}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {FIELDS.map((field) => (
            <div
              key={field.name}
              className={`${styles.field} ${
                errors[field.name] ? styles.invalid : ""
              }`.trim()}
            >
              <label className={styles.label} htmlFor={field.name}>
                {field.label}
              </label>
              {field.name === "message" ? (
                <textarea
                  className={styles.input}
                  id={field.name}
                  name={field.name}
                  rows={5}
                  placeholder={field.placeholder}
                  onInput={() => clearError(field.name)}
                />
              ) : (
                <input
                  className={styles.input}
                  id={field.name}
                  name={field.name}
                  type={field.type ?? "text"}
                  placeholder={field.placeholder}
                  autoComplete={field.autocomplete}
                  onInput={() => clearError(field.name)}
                />
              )}
              <p className={styles.error} aria-live="polite">
                {errors[field.name] ?? ""}
              </p>
            </div>
          ))}

          <button
            type="submit"
            className={`${buttons.btn} ${buttons.primary} ${styles.submit}`}
          >
            Send Message
          </button>
        </form>
      </Reveal>
    </section>
  );
}