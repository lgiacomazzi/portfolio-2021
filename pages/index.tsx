import Head from "next/head";
import Header from "../components/Header"
import Manifesto from "../components/Manifesto";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luciano Giacomazzi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Manifesto />

      <div className="container">
        <ProjectCard href="voltbras"></ProjectCard>
      </div>

      <footer>
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
