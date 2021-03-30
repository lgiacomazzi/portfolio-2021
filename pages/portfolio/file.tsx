import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/PorfolioPage.module.css";

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <motion.div layoutId="test" className={styles.porfolioHeroImage}>
        <img src="/images/file.png" />
      </motion.div>
    </div>
  );
}
