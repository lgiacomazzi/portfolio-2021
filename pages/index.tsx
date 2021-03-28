import Head from "next/head";
import Profile from "../components/Profile";

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
