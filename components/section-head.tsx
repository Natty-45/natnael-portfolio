import styles from "./section.module.css";

type SectionHeadProps = {
  number: string;
  label: string;
  title: React.ReactNode;
  sub?: string;
};

export default function SectionHead({ number, label, title, sub }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <p className="eyebrow">
        <i>{number}.</i> {label}
      </p>
      <h2 className={styles.title}>{title}</h2>
      {sub && <p className={styles.sub}>{sub}</p>}
    </div>
  );
}