import Link from "next/link";
import Icon from "../components/Icon"
import styles from "../styles/components/Header.module.css";
// import BurgerMenu from "./svgs/cat.svg"

export function NavLink({ children, href = "/" }) {
  return (
    <Link href={href}>{children}</Link>
  );
}

export default function Profile() {
  return (
    <div className={styles.header}>
      <Link href="/"><a><img src="/images/luciano-light-bk.svg" /></a></Link>
      <div className={styles.actions}>
        <NavLink href="/">Portfólio</NavLink>
        <NavLink href="/about">Sobre mim</NavLink>
        <NavLink href="/contact">Contato</NavLink>
      </div>
      <div className={styles.burgerMenu}>
        {/* <BurgerMenu /> */}
      </div>
    </div>
  );
}
