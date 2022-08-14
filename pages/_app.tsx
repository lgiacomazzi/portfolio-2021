import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import ThemeContextProvider from "../contexts/ThemeContext";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
