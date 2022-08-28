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

export function Heading6({ children }) {
  return (
    <h6 className={styles.heading6}>{children}</h6>
  )
}