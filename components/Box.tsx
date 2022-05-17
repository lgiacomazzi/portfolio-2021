import styles from "../styles/components/Box.module.css"

export default function Box({ children, gap = 16, type = 'col' }) {
    const specs = {}
    return (
        <div className={styles.type + " " + type + " gap-" + gap}>
            {children}
        </div>
    )
}