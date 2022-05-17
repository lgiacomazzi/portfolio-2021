import styles from "../styles/components/Section.module.css"

export default function Section({ children, background = "white" }) {
    return (
        <section className={styles.section + " bk-" + background}>
            {children}
        </section>
    )
}