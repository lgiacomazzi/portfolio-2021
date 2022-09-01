import Link from "next/link";
import { motion } from "framer-motion";
import Icon from "./Icon"
import styles from "../styles/components/Header.module.css";
import Logo from "../public/images/luciano-light-bk.svg";
import Menu from "./Menu";
import Button from "./Button";
import Router, { useRouter } from "next/router";
import Toggle from "./Toggle";
import { useTranslations } from 'next-intl';
import { useState } from "react";

export function LocalleToggle() {
  const router = useRouter();

  const setLocale = (locale) => {
    router.push({ query: router.query }, router.asPath, { locale, scroll: false });
  }

  if (router.locale === 'pt') return <Button variant="ghost" onClick={() => setLocale("en")}><h5>🇧🇷</h5></Button>
  if (router.locale === 'en') return <Button variant="ghost" onClick={() => setLocale("pt")}><h5>🇬🇧</h5></Button>
}

export function NavLink({ children, href = "/" }) {
  const router = useRouter();
  return (
    <motion.div whileTap={{ scale: .98 }} className={styles.navLink}>
      <Link href={href} locale={router.locale}>{children}</Link>
    </motion.div>
  );
}

export default function Header() {
  const header = useTranslations("Header");

  return (
    <motion.div
      className={styles.header}>
      <Link href="/" locale={useRouter().locale}>
        <motion.a whileTap={{ scale: .98 }} className={styles.headerLogo}>
          <Logo />
        </motion.a>
      </Link>
      <div className={styles.actionsWeb}>
        <NavLink href="/">{header('nav_link_home')}</NavLink>
        <NavLink href="/#portfolio">{header('nav_link_work')}</NavLink>
        <NavLink href="/about">{header('nav_link_about')}</NavLink>
        <NavLink href="mailto:lucianogiacomazzi@gmail.com">{header('nav_link_contact')}</NavLink>
        <NavLink href="https://github.com/lgiacomazzi/"><a><Icon icon="github" /></a></NavLink>
        <NavLink href="https://www.linkedin.com/in/lgiacomazzi/"><a><Icon icon="linked-in" /></a></NavLink>
        <LocalleToggle />
        <Toggle />
      </div>
      <div className={styles.actionsMobile}>
        <Button variant="primary" size="small" onClick={() => Router.push('mailto:lucianogiacomazzi@gmail.com')}>{header('nav_link_contact')}</Button>
        <Menu />
      </div>
    </motion.div>
  );
}
