import { PROJECTS, type Project } from "@/data/projects";
import SectionHead from "./section-head";
import Reveal from "./reveal";
import { ArrowUpRightIcon, GithubIcon } from "./icons";
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

const sortedProjects = sortProjects(PROJECTS);
const featuredProject = sortedProjects.find((project) => project.featured);
const otherProjects = sortedProjects.filter((project) => !project.featured);

function displayUrl(project: Project): string {
  if (!project.liveUrl) {
    if (!project.githubUrl) return "private client build";
    return project.githubUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
  return project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
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

function ProjectLinks({ project, onDark = false }: { project: Project; onDark?: boolean }) {
  if (!project.liveUrl && !project.githubUrl) {
    return <span className={styles.privateTag}>Client / private build</span>;
  }

  return (
    <div className={styles.links}>
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
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal>
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
          <Reveal delay={40}>
            <article className={styles.featured}>
              <div className={styles.featuredMedia}>
                <BrowserFrame project={featuredProject} />
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.featuredMeta}>
                  <span className={styles.featuredBadge}>Featured build</span>
                  <span>{featuredProject.category}</span>
                  <span>{featuredProject.year}</span>
                </div>
                <h3>{featuredProject.title}</h3>
                <p className={styles.featuredDescription}>{featuredProject.description}</p>
                <ProjectLinks project={featuredProject} onDark />
              </div>
            </article>
          </Reveal>
        )}

        <div className={styles.grid}>
          {otherProjects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 60}>
              <article className={styles.card}>
                <div className={styles.media}>
                  <BrowserFrame project={project} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.meta}>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}
