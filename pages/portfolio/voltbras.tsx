import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../../styles/PorfolioPage.module.css";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <section className={styles.porfolioHeroImage}>
        <img src="/images/file.png" />
      </section>
    </div>
  );
}