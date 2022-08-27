import styles from "../styles/components/Text.module.css";

export function Paragraph({ children }) {
  return (
    <p className={styles.paragraph}>{children}</p>
  )
}

export function SmallText({ children, secondary = false }) {
  return (
    <p className={styles.smallText}>{children}</p>
  )
}