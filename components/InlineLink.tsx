import Link from "next/link";
import { motion } from 'framer-motion'
import Icon from "./Icon";
import styles from "../styles/components/InlineLink.module.css"

export default function InlineLink({ children, href = "/" }) {
    return (
        <Link href={href} prefetch={false} passHref>
            <motion.a whileTap={{ scale: .98 }} className={styles.inlineLink}>
                {children}
                <Icon icon="external-link" />
            </motion.a>
        </Link>
    )
}