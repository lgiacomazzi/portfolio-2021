import styles from "../styles/components/Manifesto.module.css";
import CodeSnippet from "../components/CodeSnippet";
import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <div className={styles.manifesto}>
      <CodeSnippet>
        <motion.h1
          whileHover={{ skewX: 10, skewY: 2 }}
          className={styles.manifestoText}
        >
          Apaixonado por design e programação. Crio identidades visuais e
          experiências digitais. Atualmente sou UX Designer na Voltbras em
          Florianópolis.
        </motion.h1>
      </CodeSnippet>
    </div>
  );
}
