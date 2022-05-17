import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "../components/Icon"
import styles from "../styles/components/Header.module.css";

export function NavLink({ children, href = "/" }) {
  return (
    <motion.div whileTap={{ scale: .98 }} className={styles.navLink}>
      <Link href={href}>{children}</Link>
    </motion.div>
  );
}

export default function Profile() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <motion.a whileTap={{ scale: .98 }}>
          <img src="/images/luciano-light-bk.svg" />
        </motion.a>
      </Link>
      <div className={styles.actions}>
        <NavLink href="/">Portfólio</NavLink>
        <NavLink href="/about">Sobre mim</NavLink>
        <NavLink href="/contact">Contato</NavLink>
      </div>
      <div className={styles.burgerMenu}>
        <Icon icon="menu-burger" size={24} />
      </div>
    </div>
  );
}
