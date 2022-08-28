import styles from "../styles/components/Footer.module.css"
import Icon from "./Icon"
import { SmallText } from "./Text"


export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftActions}>
        <Icon icon="lvg" />
      </div>
      <SmallText>desenvolvido com ❤️ por <a href="/">@lgiacomazzi</a></SmallText>
      <div className={styles.rightActions}>
        <Icon icon="arrow-up" onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  )
}