import Head from "next/head";
import Header from "../components/Header"
import Manifesto from "../components/Manifesto";
import Projects from "../components/Projects";
import About from "../components/About";
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
  }

  return (
    <>
      <Head>
        <title>Luciano Giacomazzi | Product Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <motion.main variants={variants} initial="initial" animate="animate" exit="exit">
        <Manifesto />

        <About />

        <Projects />

      </motion.main>

      <footer className="bk-dark">
        {/* <div className="backgroundImage">
          <img
            className="layerBlur"
            src="/svg/group.svg"
            alt="Picture of the author"
          />
        </div> */}
      </footer>
    </>
  );
}
