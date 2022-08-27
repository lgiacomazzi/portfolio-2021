import Head from "next/head";
import Manifesto from "../components/Manifesto";
import Projects from "../components/Projects";
import About from "../components/About";
import { motion } from "framer-motion";
import BrandingProjects from "../components/BrandingProjects";

export default function Home() {

  return (
    <main>
      <Head>
        <title>Luciano Giacomazzi | Designer de Produtos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Manifesto />

      {/* <About /> */}

      <Projects />
      <BrandingProjects />



      <footer className="bk-dark">
        {/* <div className="backgroundImage">
          <img
            className="layerBlur"
            src="/svg/group.svg"
            alt="Picture of the author"
          />
        </div> */}
      </footer>
    </main>
  );
}
