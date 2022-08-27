import styles from "../styles/components/Footer.module.css"
import Icon from "./Icon"


export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftActions}>
        <Icon icon="home" />
      </div>
      <span className={styles.footerAuthor}>desenvolvido com ❤️ por <a href="/">@lgiacomazzi</a></span>
      <div className={styles.rightActions}>
        <Icon icon="arrow-up" onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  )
}