import styles from "../styles/components/CodeCategory.module.css";

export default function CodeCategory({ children, category }) {
  return (
    <div className={styles.category}>
      <span className="code code-purple">{"const "}</span>
      <span className="code">{category}</span>
      <span className="code">{" = "}</span>
      <span className="code code-purple">{"()"}</span>
      <span className="code code-green">{" => "}</span>
      <span className="code">{"{"}</span>
      <div className={styles.return}>
        <span className="code code-purple">{"return "}</span>
        <span className="code">{"("}</span>
        <h2 className={styles.h2}>{category}</h2>
        {children}
      </div>
      <span className="code">{"}"}</span>
    </div>
  );
}
