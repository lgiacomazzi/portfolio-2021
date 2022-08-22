import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/components/ProjectCard.module.css";
import Button from "./Button";
import Icon from "./Icon";
import Image from "next/image"

interface ProjectCardProps {
  disabled?: boolean;
  children?: string;
  name?: string;
  href?: string;
}

const Marquee = ({ children }) => {
  return (
    <div className={styles.projectTags}><span>{children}</span></div>
  )
}

export default function ProjectCard({ children, name, href, disabled = false }: ProjectCardProps) {
  return (
    <Link href={"/portfolio/" + href} >
      <motion.div
        whileTap={{ scale: 0.98 }}
        className={styles.projectCard}>
        <div className={styles.projectDetails}>
          {name && <h4 className={styles.projectName}>{name}</h4>}

          {children && <p className="text-body mt-2 mb-2">{children}</p>}

          {!disabled ?
            <Button variant="primary">Ver Case<Icon icon="arrow-right" size={16} /></Button> :
            <Button variant="secondary" disabled>Em Breve</Button>
          }
        </div>
        <div className={styles.projectHeroImage}>
          <Image
            src={"/images/" + href + ".png"}
            quality={100}
            layout="fill"
            objectFit="cover"
            unoptimized
            priority />
        </div>
      </motion.div>
    </Link>
  );
}
