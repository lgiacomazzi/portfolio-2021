import Link from "next/link";
import Icon from "../components/Icon"
import styles from "../styles/components/Header.module.css";

export function NavLink({children, href = "/"}) {
  return (
    <Link href={href}>{children}</Link>
  );
}

export default function Profile() {
  return (
    <div className={styles.header}>
        <h5><Link href="/">luciano giacomazzi</Link></h5>
        <div className={styles.actions}>
          <NavLink href="/">Portfólio</NavLink>
          <NavLink href="/about">Sobre mim</NavLink>
          <NavLink href="/contact">Contato</NavLink>
        </div>
        <div className={styles.burgerMenu}>
          <Icon icon="burger_menu"/>
        </div>
    </div>
  );
}
