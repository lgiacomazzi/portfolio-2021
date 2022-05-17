import styles from "../styles/components/Section.module.css"
import { Box } from "./Box"

export default function Section({ children, background = "white" }) {
    return (
        <div className={styles.section}>
            {children}
        </div>
    )
}