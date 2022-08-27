import Head from "next/head";
import Manifesto from "../components/Manifesto";
import Projects from "../components/Projects";
import BrandingProjects from "../components/BrandingProjects";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion 
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
    >
      <Head>
        <title>Luciano Giacomazzi | Designer de Produtos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Manifesto />
      <Projects />
      <BrandingProjects />
    </motion.main>
  );
}
