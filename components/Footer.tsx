import styles from "../styles/components/Footer.module.css"
import Icon from "./Icon"
import { SmallText } from "./Text"
import { useTranslations } from 'next-intl';


export function Footer() {
  const footer = useTranslations('Footer');

  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftActions}>
        <Icon icon="lvg" />
        <SmallText>© 2022</SmallText>
      </div>
      <SmallText>{footer('developed_by')}&nbsp;<a href="/">@lgiacomazzi</a></SmallText>
      <div className={styles.rightActions}>
        <Icon icon="arrow-up" onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  )
}