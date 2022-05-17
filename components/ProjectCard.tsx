import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/components/ProjectCard.module.css";
import Button from "./Button";
import Icon from "./Icon";

export default function ProjectCard({ name = "Project Name", href }) {
  return (
    <Link href={"/portfolio/" + href}>
      <motion.div
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={styles.projectCard}>
        <div className={styles.projectDetails}>
          <h4 className="mb-3">{name}</h4>
          <p className="text-body mb-4">A Voltbras é uma empresa de mobilidade elétrica que oferece praticidade na hora de carregar um veículo elétrico através do seu app. Participei do projeto com objetivo de desenhar uma nova experiência de agendamento de recargas.</p>
          <Button variant="primary">Ver Case<Icon icon="arrow-right" size={20} /></Button>
        </div>
        <div className={styles.projectHeroImage}>
          <img src="/images/voltbras.png" />
        </div>
      </motion.div>
    </Link>
  );
}
