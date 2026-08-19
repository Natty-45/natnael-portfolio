"use client";

import { useMemo } from "react";
import { PROJECTS, type Project } from "@/data/projects";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import styles from "./projects.module.css";

function parseDate(iso: string): number {
  if (!iso) return 0;
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1).getTime();
}

function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return parseDate(b.date) - parseDate(a.date);
  });
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, techStack, liveUrl, githubUrl } = project;

  const link = liveUrl || githubUrl;

  return (
    <article className={styles.project}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          {link ? (
            <a href={link} target="_blank" rel="noopener">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {link && (
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        )}
      </div>
      <p className={styles.desc}>{description}</p>
      <ul className={styles.tagRow} role="list">
        {techStack.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  const sorted = useMemo(() => sortProjects(PROJECTS), []);

  return (
    <section className={styles.section} id="projects">
      <Reveal>
        <SectionHead label="projects" title="Things I've built" />
      </Reveal>

      {sorted.length ? (
        <div className={styles.list}>
          {sorted.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>Projects coming soon.</p>
      )}
    </section>
  );
}
