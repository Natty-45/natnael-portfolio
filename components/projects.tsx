"use client";

import { useMemo, useState } from "react";
import { PROJECTS, type Project } from "@/data/projects";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import buttons from "./buttons.module.css";
import styles from "./projects.module.css";

const INITIAL_COUNT = 6;
const CARD_GLYPHS = ["</>", "{;}", ">_", "\u25AB", "[ ]", "< >", "{ }", "//"];

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

function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(parseDate(iso)).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function thumbFile(title: string): string {
  return (
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") +
    ".png"
  );
}

function glyphFor(title: string): string {
  let h = 0;
  for (let i = 0; i < title.length; i++)
    h = (h * 31 + title.charCodeAt(i)) % 997;
  return CARD_GLYPHS[h % CARD_GLYPHS.length];
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, techStack, thumbnail, liveUrl, githubUrl, featured, date } =
    project;

  const thumbInner = thumbnail ? (
    <img src={thumbnail} alt={`${title} — screenshot`} loading="lazy" />
  ) : (
    <>
      <span className={styles.thumbFile}>{thumbFile(title)}</span>
      <span className={styles.thumbGlyph} aria-hidden="true">
        {glyphFor(title)}
      </span>
    </>
  );

  const badge = featured && (
    <span className={styles.badge}>featured</span>
  );

  const thumb = liveUrl ? (
    <a
      className={styles.thumb}
      href={liveUrl}
      target="_blank"
      rel="noopener"
      aria-label={`${title} — live demo`}
      tabIndex={-1}
    >
      {badge}
      {thumbInner}
    </a>
  ) : (
    <div className={styles.thumb}>
      {badge}
      {thumbInner}
    </div>
  );

  const hasLinks = Boolean(liveUrl || githubUrl);

  const meta = (hasLinks || date) && (
    <div className={styles.links}>
      {liveUrl && (
        <a className={styles.link} href={liveUrl} target="_blank" rel="noopener">
          Live demo ↗
        </a>
      )}
      {githubUrl && (
        <a className={styles.link} href={githubUrl} target="_blank" rel="noopener">
          GitHub ↗
        </a>
      )}
      {date && <span className={styles.date}>{formatDate(date)}</span>}
    </div>
  );

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      {thumb}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <ul className={styles.tagRow} role="list">
          {techStack.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        {meta}
      </div>
    </article>
  );
}

export default function Projects() {
  const sorted = useMemo(() => sortProjects(PROJECTS), []);
  const [expanded, setExpanded] = useState(false);

  const limited = sorted.length > INITIAL_COUNT;
  const visible = limited && !expanded ? sorted.slice(0, INITIAL_COUNT) : sorted;

  return (
    <section className={styles.section} id="projects">
      <Reveal>
        <SectionHead
          number="03"
          label="projects"
          title="Things I've built"
          sub="New projects go in data/projects.ts — the grid renders itself, newest first. Add a thumbnail path anytime to replace the placeholder."
        />
      </Reveal>

      {visible.length ? (
        <div className={styles.grid}>
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>
          No projects yet — add one to <code className="code">data/projects.ts</code>.
        </p>
      )}

        {limited && (
          <div className={styles.more}>
            <button
              type="button"
              className={`${buttons.btn} ${buttons.ghost}`}
              aria-expanded={expanded}
              onClick={() => setExpanded((e) => !e)}
            >
              {expanded ? "Show fewer" : `View All Projects (${sorted.length})`}
            </button>
          </div>
        )}
    </section>
  );
}