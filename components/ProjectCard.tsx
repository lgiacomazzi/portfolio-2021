// import Image from "next/image";
import ProjectCategoryIcons from "./ProjectCategoryIcons";
import { motion } from "framer-motion";
import styles from "../styles/components/ProjectCard.module.css";

export default function ProjectCard({}) {
  return (
    <motion.div className={styles.projectCard}>
      <div className={styles.projectDetails}>
        <span className="code">{"<>"}</span>
        <h3>project name</h3>
        <ProjectCategoryIcons category={["branding"]} />
        <span className="code">{"</>"}</span>
      </div>
    </motion.div>
  );
}
