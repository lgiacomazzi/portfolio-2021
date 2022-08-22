import styles from "../styles/components/Manifesto.module.css";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'
import Button from "../components/Button";
import Link from "next/link"
import InlineLink from "../components/InlineLink";
import ScrollDown from "../public/svg/scroll-down.svg";
import Icon from "./Icon";

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

  const textVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <section className={styles.manifesto + " bk-main"}>
      <div className={styles.container}>
        <motion.h1 variants={textVariants} whileHover={{ fontWeight: 100 }} className={styles.manifestoText}>
          {/* hey there, i'm luciano — a product designer experienced in frontend development. currently solving complex design challenges at <InlineLink href="https://deliverymuch.com.br/">delivery much</InlineLink> */}
          Olá! Sou Luciano — Designer de Produtos com experiência em desenvolvimento Frontend. Atualmente resolvendo problemas através do design na <InlineLink href="https://deliverymuch.com.br/">Delivery Much</InlineLink>
        </motion.h1>

        <motion.div className={styles.manifestoActions}>
          <Button variant="primary" onClick={() => router.push('/#portfolio')}>Portfólio<Icon icon="arrow-down" size={16} /></Button>
          <Button variant="secondary" onClick={() => router.push('/about')}>Sobre mim</Button>
          <Button variant="secondary" onClick={() => router.push('/contact')}>Contato</Button>
        </motion.div>

        <ScrollButton />
      </div>
    </section>

  );
}
