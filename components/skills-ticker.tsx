import styles from "./skills-ticker.module.css";

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "React Native",
  "PWA",
];

export default function SkillsTicker() {
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {[0, 1].map((group) => (
          <div className={styles.group} key={group}>
            {SKILLS.map((skill) => (
              <span key={skill}>
                {skill}
                <b>✳</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
