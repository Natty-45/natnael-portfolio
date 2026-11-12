"use client";

import Link from "next/link";
import Parallax from "../../../components/parallax";
import Reveal from "../../../components/reveal";
import { ArrowUpRightIcon, GithubIcon } from "../../../components/icons";
import { PROJECT_GROUP_LABELS, type Project } from "../../../data/projects";
import styles from "./project-detail.module.css";

type ProjectDetailProps = {
  project: Project;
  prev: Project | null;
  next: Project | null;
};

function displayUrl(project: Project): string {
  if (project.liveUrl) {
    return project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
  if (project.githubUrl) {
    return project.githubUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
  return "private client build";
}

function Media({ project }: { project: Project }) {
  if (project.layout === "mobile") {
    const shot = project.gallery?.[0]?.src ?? project.image;
    return (
      <div className={styles.phone}>
        <img src={shot} alt={project.imageAlt} width={410} height={1000} />
      </div>
    );
  }

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

function DetailLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.playUrl && !project.githubUrl) {
    return <span className={styles.privateTag}>Client / private build</span>;
  }

  return (
    <div className={styles.heroActions}>
      {project.playUrl && (
        <a
          className="btn btnCanary"
          href={project.playUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Store
          <ArrowUpRightIcon />
        </a>
      )}
      {project.liveUrl && (
        <a
          className="btn btnOutlineDark"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live site
          <ArrowUpRightIcon />
        </a>
      )}
      {project.githubUrl && (
        <a
          className="btn btnOutlineDark"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
          <GithubIcon />
        </a>
      )}
    </div>
  );
}

export default function ProjectDetail({
  project,
  next,
}: ProjectDetailProps) {
  const hasGallery = Boolean(project.gallery?.length);
  const outcomeIndex = hasGallery ? "05" : "04";

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <Parallax speed={0.12} className={styles.heroCircleOne}>
            <span />
          </Parallax>
          <Parallax speed={-0.08} className={styles.heroCircleTwo}>
            <span />
          </Parallax>
        </div>

        <div className={`wrap ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <Reveal variant="fade">
              <Link className={styles.back} href="/#work">
                <ArrowUpRightIcon />
                All work
              </Link>
            </Reveal>

            <Reveal variant="up" delay={70}>
              <div className={styles.heroMeta}>
                <span>{project.category}</span>
                <span>{project.year}</span>
                {project.group === "bt" && (
                  <span>{PROJECT_GROUP_LABELS.bt}</span>
                )}
              </div>
              <h1>{project.title}</h1>
              <p className={styles.heroDescription}>{project.description}</p>
              <DetailLinks project={project} />
            </Reveal>
          </div>

          <Reveal variant="right" delay={140} className={styles.heroMediaWrap}>
            <Parallax speed={0.06}>
              <Media project={project} />
            </Parallax>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.overview}`}>
        <div className="wrap">
          <div className={styles.split}>
            <Reveal variant="left" className={styles.splitLabel}>
              <span>01</span>
              <span>Overview</span>
            </Reveal>
            <div>
              <Reveal variant="up" delay={60}>
                <p className={styles.lead}>{project.overview}</p>
              </Reveal>
              <Reveal variant="up" delay={120}>
                <div className={styles.factGrid}>
                  <div className={styles.fact}>
                    <span>Category</span>
                    <strong>{project.category}</strong>
                  </div>
                  <div className={styles.fact}>
                    <span>Year</span>
                    <strong>{project.year}</strong>
                  </div>
                  <div className={styles.fact}>
                    <span>Platform</span>
                    <strong>{project.layout === "mobile" ? "Mobile app" : "Web app"}</strong>
                  </div>
                  <div className={styles.fact}>
                    <span>Deliverable</span>
                    <strong>Product build</strong>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.features}`}>
        <div className="wrap">
          <Reveal variant="left">
            <div className={styles.sectionLabel}>
              <span>02</span>
              <span>What it does</span>
              <span className={styles.labelRule} aria-hidden="true" />
            </div>
          </Reveal>
          <div className={styles.featureGrid}>
            {project.features.map((feature, i) => (
              <Reveal
                key={feature}
                variant="up"
                delay={i * 70}
                className={styles.featureCard}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.stack}`}>
        <div className="wrap">
          <div className={styles.stackInner}>
            <Reveal variant="left">
              <div className={styles.sectionLabel}>
                <span>03</span>
                <span>Built with</span>
                <span className={styles.labelRule} aria-hidden="true" />
              </div>
              <h2>
                The stack behind
                <br />
                <em>the build.</em>
              </h2>
            </Reveal>
            <Reveal variant="right" delay={80}>
              <ul className={styles.chips} role="list">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {hasGallery && (
        <section className={`section ${styles.gallery}`}>
          <div className="wrap">
            <Reveal variant="left">
              <div className={styles.sectionLabel}>
                <span>04</span>
                <span>Screens</span>
                <span className={styles.labelRule} aria-hidden="true" />
              </div>
            </Reveal>
            <div className={styles.galleryGrid}>
              {project.gallery?.map((shot, i) => (
                <Reveal
                  key={shot.src}
                  variant="up"
                  delay={i * 80}
                  className={styles.galleryItem}
                >
                  <Parallax speed={0.04 + i * 0.015}>
                    <img src={shot.src} alt={shot.alt} width={410} height={1000} />
                  </Parallax>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`section ${styles.outcome}`}>
        <div className="wrap">
          <div className={styles.outcomeInner}>
            <Reveal variant="left">
              <div className={styles.sectionLabel}>
                <span>{outcomeIndex}</span>
                <span>Outcome</span>
                <span className={styles.labelRule} aria-hidden="true" />
              </div>
            </Reveal>
            <ul className={styles.outcomeList}>
              {project.outcomes.map((outcome, i) => (
                <Reveal key={outcome} variant="right" delay={i * 70}>
                  <li>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {outcome}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`section ${styles.next}`}>
        <div className="wrap">
          {next ? (
            <Reveal variant="up">
              <Link className={styles.nextCard} href={`/projects/${next.slug}`}>
                <span>Next project</span>
                <strong>{next.title}</strong>
                <span>
                  {next.category} · {next.year}
                </span>
                <ArrowUpRightIcon />
              </Link>
            </Reveal>
          ) : (
            <Reveal variant="up">
              <Link className={styles.nextCard} href="/#work">
                <span>Back to all work</span>
                <strong>Selected work</strong>
                <span>More builds, more context</span>
                <ArrowUpRightIcon />
              </Link>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}
