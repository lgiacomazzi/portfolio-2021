import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/components/ProjectCard.module.css";
import Button from "./Button";
import Icon from "./Icon";

interface ProjectCardProps {
  disabled?: boolean;
  children?: string;
  name?: string;
  href?: string;
}

export default function ProjectCard({ children, name, href, disabled = false }: ProjectCardProps) {
  return (
    <Link href={"/portfolio/" + href}>
      <motion.div
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={styles.projectCard}>
        <div className={styles.projectDetails}>
          {name && <h4 className="mb-2">{name}</h4>}
          {children && <p className="text-body mb-2">{children}</p>}

          {!disabled ?
            <Button variant="primary">Ver Case<Icon icon="arrow-right" size={20} /></Button> :
            <Button variant="secondary" disabled>Em Breve</Button>
          }

        </div>
        <div className={styles.projectHeroImage}>
          <img src={"/images/" + href + ".png"} />
        </div>
      </motion.div>
    </Link>
  );
}
