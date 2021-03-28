import Head from "next/head";
import Profile from "../components/Profile";
import Manifesto from "../components/Manifesto";
import MainButton from "../components/MainButton";

import CodeCategory from "../components/CodeCategory";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Luciano Giacomazzi</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Profile />
        <Manifesto />
        <MainButton>Portfólio</MainButton>
        <CodeCategory category="branding">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          sagittis cras commodo velit. Id ultricies purus duis magna.
        </CodeCategory>
      </main>

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
