import "../styles/globals.css";
// import "../styles/grid.css";
import "../styles/colors.css";
import "../styles/bootstrap.css";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
