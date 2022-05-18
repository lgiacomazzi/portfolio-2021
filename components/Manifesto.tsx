import styles from "../styles/components/Manifesto.module.css";
import { motion } from "framer-motion";
import Button from "../components/Button";
import InlineLink from "../components/InlineLink";


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
          Currently solving complex design challenges at <InlineLink>Delivery Much</InlineLink>
        </motion.p>
        <motion.div className={styles.manifestoActions}>
          <Button variant="secondary">Sobre mim</Button>
          <Button variant="secondary">Contato</Button>
        </motion.div>
      </div>
    </section>
  );
}
