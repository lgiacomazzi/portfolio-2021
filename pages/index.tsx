import Head from "next/head";
import Header from "../components/Header"
import Manifesto from "../components/Manifesto";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luciano Giacomazzi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Manifesto />

      <About />

      <Projects />

      <footer className="bk-dark">
        {/* <div className="backgroundImage">
          <img
            className="layerBlur"
            src="/svg/group.svg"
            alt="Picture of the author"
          />
        </div> */}
      </footer>
    </div>
  );
}
