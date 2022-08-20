import styles from "../styles/components/Button.module.css";
import { motion } from "framer-motion";

interface ButtonProps {
  children: any;
  variant?: "primary" | "secondary" | "secondary-white" | "ghost";
  size?: "default" | "small";
  onClick?: () => void;
  disabled?: boolean
}

export default function Button({ children, variant = "primary", disabled = false, size = "default", onClick }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: .96 }}
      className={styles[`${variant}`] + ' ' + styles[`${size}`]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
