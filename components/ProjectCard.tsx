import Link from "next/link";
import Image from "next/image";
import ProjectCategoryIcons from "./ProjectCategoryIcons";
import { motion } from "framer-motion";
import styles from "../styles/components/ProjectCard.module.css";

export default function ProjectCard({}) {
  return (
    <Link href="/portfolio/file">
      <motion.div className={styles.projectCard}>
        <motion.div layoutId="test" className={styles.projectHeroImage}>
          <img src="/images/file.png" />
        </motion.div>
        <div className={styles.projectDetails}>
          <span className="code">{"<>"}</span>
          <h3>project name</h3>
          <ProjectCategoryIcons category={["branding"]} />
          <span className="code">{"</>"}</span>
        </div>
      </motion.div>
    </Link>
  );
}
