import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
