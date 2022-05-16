import styles from "../styles/components/Button.module.css";
import { motion } from "framer-motion";

export default function MainButton({ children }) {
  return (
        <motion.button
          className={styles.Button}
        >
          {children}
        </motion.button>
  );
}
