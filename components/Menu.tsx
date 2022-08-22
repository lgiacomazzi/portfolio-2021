import { motion } from "framer-motion";
import styles from "../styles/components/Menu.module.css";
import { useState } from "react";
import Icon from "./Icon";
import Toggle from "./Toggle";
import Link from "next/link";
import Button from "./Button";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        closed: {
            x: "100%",
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                bounce: 0,
                delayChildren: 0.2,
                staggerChildren: 0.2,
            },
        },
    };

    const MenuToggle = () => (
        <Button size="small" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            < Icon icon="menu-burger" size={24} color="text-primary" />
        </Button >
    )

    const MenuLink = ({ children, href = "/" }) => (
        <motion.div whileTap={{ scale: .98 }} className={styles.menuLink}>
            <Link href={href}>{children}</Link>
        </motion.div>
    );


    return (
        <motion.nav className={styles.menu} animate={isOpen ? "open" : "closed"} initial={false}>
            <MenuToggle />
            <motion.div className={styles.menuBackground} variants={variants}>
                <Button variant="secondary" size="small" onClick={() => setIsOpen(!isOpen)}>
                    <Icon icon="close" size={24} color="text-primary" />
                </Button>
                <motion.div className={styles.menuItems} variants={variants}>
                    <MenuLink href="/">Portfólio</MenuLink>
                    <MenuLink href="/about">Sobre mim</MenuLink>
                    <MenuLink href="/contact">Contato</MenuLink>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <MenuLink href="https://www.linkedin.com/in/lgiacomazzi/"><a><Icon icon="linked-in" /></a></MenuLink>
                        <MenuLink href="https://www.github.com/lgiacomazzi/"><a><Icon icon="github" /></a></MenuLink>
                    </div>
                </motion.div>
                <Toggle />
            </motion.div>
        </motion.nav>
    );
}