import styles from "../styles/components/Button.module.css";
import { motion } from "framer-motion";

export default function MainButton({ children, type, href, onClick }) {
  return (
        <motion.button
          type="button"
          className={styles.Button}
        >
          {children}
        </motion.button>
  );
}
