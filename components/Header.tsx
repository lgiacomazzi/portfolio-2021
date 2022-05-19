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
    <motion.div
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      className={styles.header}>
      <Link href="/">
        <motion.a whileTap={{ scale: .98 }} className={styles.headerLogo}>
          <img src="/images/luciano-light-bk.svg" />
        </motion.a>
      </Link>
      <div className={styles.actions}>
        <NavLink href="/#portfolio">Portfólio</NavLink>
        <NavLink href="/about">Sobre mim</NavLink>
        <NavLink href="/contact">Contato</NavLink>
        <NavLink href="https://www.linkedin.com/in/lgiacomazzi/"><a><Icon icon="linked-in" /></a></NavLink>
      </div>
      <div className={styles.burgerMenu}>
        <Icon icon="menu-burger" size={24} />
      </div>
    </motion.div>
  );
}
