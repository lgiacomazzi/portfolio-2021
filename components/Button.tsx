import styles from "../styles/components/Button.module.css";
import { motion } from "framer-motion";

export default function Button({ children, variant = "primary", disabled = false }) {
  return (
    <motion.button
      whileTap={{ scale: .96 }}
      className={styles[`${variant}`]}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
