import Link from "next/link";
import {
  PROJECT_GROUP_LABELS,
  PROJECTS,
  sortProjects,
  type Project,
} from "@/data/projects";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import Parallax from "./parallax";
import { ArrowUpRightIcon, GithubIcon } from "./icons";
import styles from "./projects.module.css";

const sortedProjects = sortProjects();
const featuredProject = sortedProjects.find((project) => project.featured);
const btProjects = sortedProjects.filter(
  (project) => project.group === "bt" && !project.featured
);
const clientProjects = sortedProjects.filter(
  (project) => project.group === "client" && !project.featured
);

function displayUrl(project: Project): string {
  if (project.liveUrl) {
    return project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
  if (project.githubUrl) {
    return project.githubUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
  return "private client build";
}

function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className={styles.frame}>
      <div className={styles.frameBar}>
        <span className={styles.frameDots} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className={styles.frameUrl}>{displayUrl(project)}</span>
        <span className={styles.frameYear}>{project.year}</span>
      </div>
      <div className={styles.frameImage}>
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1400}
          height={875}
          decoding="async"
        />
      </div>
    </div>
  );
}

function CaseStudyLink({
  project,
  onDark = false,
}: {
  project: Project;
  onDark?: boolean;
}) {
  return (
    <Link
      className={`btn ${onDark ? "btnOutlineDark" : "btnGhost"} ${styles.linkBtn}`}
      href={`/projects/${project.slug}`}
      aria-label={`Open the ${project.title} case study`}
    >
      Case study
      <ArrowUpRightIcon />
    </Link>
  );
}

function ProjectLinks({
  project,
  onDark = false,
}: {
  project: Project;
  onDark?: boolean;
}) {
  return (
    <div className={styles.links}>
      <CaseStudyLink project={project} onDark={onDark} />
      {project.liveUrl && (
        <a
          className={`btn ${onDark ? "btnOnDark" : "btnPrimary"} ${styles.linkBtn}`}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live site (opens in a new tab)`}
        >
          Live site
          <ArrowUpRightIcon />
        </a>
      )}
      {project.playUrl && (
        <a
          className={`btn ${onDark ? "btnOnDark" : "btnPrimary"} ${styles.linkBtn}`}
          href={project.playUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get ${project.title} on Google Play (opens in a new tab)`}
        >
          Play Store
          <ArrowUpRightIcon />
        </a>
      )}
      {project.githubUrl && (
        <a
          className={`btn ${onDark ? "btnOutlineDark" : "btnGhost"} ${styles.linkBtn}`}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source on GitHub (opens in a new tab)`}
        >
          Source
          <GithubIcon />
        </a>
      )}
      {!project.liveUrl && !project.githubUrl && (
        <span className={styles.privateTag}>Client / private build</span>
      )}
    </div>
  );
}

function GroupHead({ label, count }: { label: string; count: number }) {
  return (
    <Reveal variant="left">
      <div className={styles.groupHead}>
        <span className={styles.groupLabel}>{label}</span>
        <span className={styles.groupRule} aria-hidden="true" />
        <span className={styles.groupCount}>{count} builds</span>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal variant="up" delay={(index % 3) * 70}>
      <article className={styles.card}>
        <Link
          className={styles.mediaLink}
          href={`/projects/${project.slug}`}
          aria-label={`Open the ${project.title} case study`}
        >
          <div className={styles.media}>
            <BrowserFrame project={project} />
          </div>
        </Link>
        <div className={styles.cardBody}>
          <div className={styles.meta}>
            <span>{project.category}</span>
          </div>
          <h3>
            <Link
              className={styles.titleLink}
              href={`/projects/${project.slug}`}
            >
              {project.title}
            </Link>
          </h3>
          <p>{project.description}</p>
          <ul className={styles.tags} role="list">
            {project.techStack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <ProjectLinks project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal variant="left">
          <SectionHead
            index="01"
            label="Selected work"
            title={
              <>
                Built to be used,
                <br />
                <em>not just demoed.</em>
              </>
            }
            sub={`${PROJECTS.length} builds for real clients, real audiences and real deadlines.`}
          />
        </Reveal>

        {featuredProject && (
          <Reveal variant="up" delay={40}>
            <article className={styles.featured}>
              <Link
                className={styles.featuredMediaLink}
                href={`/projects/${featuredProject.slug}`}
                aria-label={`Open the ${featuredProject.title} case study`}
              >
                <div className={styles.featuredMedia}>
                  <Parallax speed={0.05}>
                    <BrowserFrame project={featuredProject} />
                  </Parallax>
                </div>
              </Link>
              <div className={styles.featuredBody}>
                <div className={styles.featuredMeta}>
                  <span className={styles.featuredBadge}>Featured build</span>
                  <span>{featuredProject.category}</span>
                  <span>{featuredProject.year}</span>
                </div>
                <h3>
                  <Link
                    className={styles.titleLink}
                    href={`/projects/${featuredProject.slug}`}
                  >
                    {featuredProject.title}
                  </Link>
                </h3>
                <p className={styles.featuredDescription}>
                  {featuredProject.description}
                </p>
                <ProjectLinks project={featuredProject} onDark />
              </div>
            </article>
          </Reveal>
        )}

        <div className={styles.group}>
          <GroupHead
            label={PROJECT_GROUP_LABELS.bt}
            count={btProjects.length}
          />
          <div className={styles.grid}>
            {btProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <GroupHead
            label={PROJECT_GROUP_LABELS.client}
            count={clientProjects.length}
          />
          <div className={styles.grid}>
            {clientProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
