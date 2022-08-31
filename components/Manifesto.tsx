import styles from "../styles/components/Manifesto.module.css";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'
import Button from "../components/Button";
import Link from "next/link"
import InlineLink from "../components/InlineLink";
import ScrollDown from "../public/svg/scroll-down.svg";
import Icon from "./Icon";
import { useTranslations } from 'next-intl';


const ScrollButton = () => {
  return (
    <Link href="/#portfolio">
      <motion.a whileHover={{ scale: 1.08 }} whileTap={{ scale: .98 }} className={styles.manifestoScroll}>
        <ScrollDown />
      </motion.a>
    </Link>
  )
}

export default function Manifesto() {
  const router = useRouter();
  const manifesto = useTranslations('Manifesto');

  const textVariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 }
  }

  return (
    <section className={styles.manifesto + " bk-main"}>
      <div className={styles.container}>
        <motion.h1 variants={textVariants} whileHover={{ fontWeight: 100 }} className={styles.manifestoText}>
          {manifesto('hi_there')}<InlineLink href="https://deliverymuch.com.br/">Delivery Much</InlineLink>
        </motion.h1>

        <motion.div className={styles.manifestoActions}>
          <Button variant="primary" onClick={() => router.push('/#portfolio')}>{manifesto('button_work')}<Icon icon="arrow-down" size={16} /></Button>
          <Button variant="secondary" onClick={() => router.push('/about')}>{manifesto('button_about')}</Button>
          {/* <Button variant="secondary" onClick={() => router.push('/contact')}>Contato</Button> */}
        </motion.div>
      </div>
      <ScrollButton />
    </section>

  );
}
