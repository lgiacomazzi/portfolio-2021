import styles from "../styles/components/MainButton.module.css";
import CodeSnippet from "../components/CodeSnippet";
import { motion } from "framer-motion";

export default function MainButton({ children }) {
  return (
    <div className={styles.mainButtonContainer}>
      <CodeSnippet>
        <motion.button
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.85 }}
          transition={{ duration: 0.2 }}
          className={styles.mainButton + " button"}
        >
          {children}
        </motion.button>
      </CodeSnippet>
    </div>
  );
}
