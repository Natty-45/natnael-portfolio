import styles from "./section.module.css";

type SectionHeadProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  sub?: string;
};

export default function SectionHead({ index, label, title, sub }: SectionHeadProps) {
  return (
    <header className={styles.head}>
      <div className={styles.meta}>
        <span className={styles.index}>{index}</span>
        <span className={styles.label}>{label}</span>
        <span className={styles.rule} aria-hidden="true" />
      </div>
      <div className={styles.row}>
        <h2 className={styles.title}>{title}</h2>
        {sub && <p className={styles.sub}>{sub}</p>}
      </div>
    </header>
  );
}
