import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/components/ProjectCard.module.css";

export default function ProjectCard({name = "Project Name"}) {
  return (
    <Link href="/portfolio">
      <motion.div className={styles.projectCard}>
        <div className={styles.projectDetails}>
          <h3>{name}</h3>
          <p className="text-body">A Voltbras é uma empresa de mobilidade elétrica que oferece praticidade na hora de carregar um veículo elétrico através do seu apl. Participei do projeto com objetivo de desenhar uma nova experiência de agendamento de recargas.</p>
        </div>
        <div className={styles.projectHeroImage}>
          <img src="/images/voltbras.png" />
        </div>
      </motion.div>
    </Link>
  );
}
