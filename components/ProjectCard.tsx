import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/components/ProjectCard.module.css";
import Button from "./Button";
import Icon from "./Icon";
import Image from "next/image"
import Router from "next/router";

interface ProjectCardProps {
  disabled?: boolean;
  content?: any;
}

const Marquee = ({ children }) => {
  return (
    <div className={styles.projectTags}><span>{children}</span></div>
  )
}

export default function ProjectCard({ disabled = false, content = {} }: ProjectCardProps) {
  const handleRedirect = (url) => {
    !disabled && Router.push(`/portfolio/${url}`)
  }

  return (

    <motion.div
      whileTap={{ scale: 0.98 }}
      className={styles.projectCard}
      onClick={() => handleRedirect(content.href)} >
      <div className={styles.projectDetails}>
        {content.name && <h4 className={styles.projectName}>{content.name}</h4>}

        {content.description && <p className="text-body mt-2 mb-2">{content.description}</p>}

        {!disabled ?
          <Button variant="primary">Ver Case<Icon icon="arrow-right" size={16} /></Button> :
          <Button variant="secondary" disabled>Em Breve</Button>
        }
      </div>
      <div className={styles.projectHeroImage}>
        <Image
          src={"/images/main/" + content.imageUrl}
          quality={100}
          layout="fill"
          objectFit="cover"
          unoptimized
          priority />
      </div>
    </motion.div>
  );
}
