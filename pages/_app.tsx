import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import ThemeContextProvider from "../contexts/ThemeContext";
import Header from "../components/Header";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
