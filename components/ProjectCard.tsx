// import Image from "next/image";
import styles from "../styles/components/ProjectCard.module.css";
import ProjectCategoryIcons from "./ProjectCategoryIcons";

export default function ProjectCard({}) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectDetails}>
        <span className="code">{"<>"}</span>
        <h3>project name</h3>
        <ProjectCategoryIcons category={["branding"]} />
        <span className="code">{"</>"}</span>
      </div>
    </div>
  );
}
