import styles from "../styles/components/Button.module.css";
import { motion } from "framer-motion";

export default function MainButton({ children, variant = "primary" }) {
  return (
    <motion.button
      className={styles[`${variant}`]}
    >
      {children}
    </motion.button>
  );
}
