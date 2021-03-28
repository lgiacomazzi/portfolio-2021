import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Luciano Giacomazzi</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <h1>luciano giacomazzi</h1>
      </main>

      <footer>
        <Image
          className="layerBlur"
          src="/svg/group.svg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </footer>
    </div>
  );
}
