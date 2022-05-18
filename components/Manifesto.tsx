import styles from "../styles/components/Manifesto.module.css";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Link from "next/link"
import InlineLink from "../components/InlineLink";

const ScrollButton = () => {
  return (
    <Link href="/#portfolio">
      <motion.a whileHover={{ scale: 1.08 }} whileTap={{ scale: .98 }} className={styles.manifestoScroll}>
        <img src="/svg/scroll-down.svg" height={80} width={80} />
      </motion.a>
    </Link>
  )
}

export default function Manifesto() {
  const textVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <section className={styles.manifesto}>
      <div className="container">
        <motion.h1 variants={textVariants} whileHover={{ fontWeight: 100 }} className={styles.manifestoText}>
          hey there, i'm luciano — a product designer experienced in frontend development.
        </motion.h1>
        <motion.p variants={textVariants} className="text-lead mb-2">
          currently solving complex design challenges at <InlineLink>delivery much</InlineLink>
        </motion.p>
        <motion.div className={styles.manifestoActions}>
          <Button variant="secondary">Sobre mim</Button>
          <Button variant="secondary">Contato</Button>
        </motion.div>
      </div>
      <ScrollButton />

    </section>
  );
}
