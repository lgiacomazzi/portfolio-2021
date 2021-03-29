import styles from "../styles/components/CodeCategory.module.css";
import ProjectCard from "../components/ProjectCard";

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
        <div className={styles.jsx}>
          <span className="code">{"<"}</span>
          <span className="code code-blue">{"h2"}</span>
          <span className="code">{">"}</span>
          <h2 className={styles.h2}>{category}</h2>
          <span className="code">{"<"}</span>
          <span className="code code-blue">{"/h2"}</span>
          <span className="code">{">"}</span>
          <br />
          <span className="code">{"<"}</span>
          <span className="code code-blue">{"p"}</span>
          <span className="code">{">"}</span>
          <div className={styles.h2}>{children}</div>
          <span className="code">{"<"}</span>
          <span className="code code-blue">{"/p"}</span>
          <span className="code">{">"}</span>
        </div>
        <span className="code">{")"}</span>
      </div>
      <span className="code">{"}"}</span>
      <br />
      <span className="code">{"["}</span>
      <div className={styles.projectCards}>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
      <span className="code">{"]"}</span>
    </div>
  );
}
