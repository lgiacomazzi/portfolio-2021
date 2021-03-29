import Head from "next/head";
import Profile from "../components/Profile";
import Manifesto from "../components/Manifesto";
import MainButton from "../components/MainButton";
import CodeCategory from "../components/CodeCategory";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luciano Giacomazzi</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="container">
        <Profile />
        <Manifesto />
        <MainButton>Portfólio</MainButton>
      </div>

      <CodeCategory category="branding">
        Design de marcas com propósito. Criação de identidade visual com logos,
        paleta de cores, tipografia e personalidade de marca.
      </CodeCategory>
      <CodeCategory category="ux design">
        Design de experiências com foco no usuário. Pesquisa, imersão, fluxos,
        criação de interfaces e protótipos.
      </CodeCategory>
      <CodeCategory category="front-end">
        Desenvolvimento de websites seguindo as melhores práticas de UX e
        utilizando bibliotecas Javascript.
      </CodeCategory>

      <footer>
        <div className="backgroundImage">
          <img
            className="layerBlur"
            src="/svg/group.svg"
            alt="Picture of the author"
          />
        </div>
      </footer>
    </div>
  );
}
