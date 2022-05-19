import styles from "../styles/components/Button.module.css";
import { motion } from "framer-motion";

interface ButtonProps {
  children: any;
  variant?: "primary" | "secondary" | "secondary-white";
  onClick?: () => void;
  disabled?: boolean
}

export default function Button({ children, variant = "primary", disabled = false, onClick }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: .96 }}
      className={styles[`${variant}`]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
