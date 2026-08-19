import styles from "./section.module.css";

type SectionHeadProps = {
  label: string;
  title: React.ReactNode;
  sub?: string;
};

export default function SectionHead({ label, title, sub }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <p className="eyebrow">{label}</p>
      <h2 className={styles.title}>{title}</h2>
      {sub && <p className={styles.sub}>{sub}</p>}
    </div>
  );
}
