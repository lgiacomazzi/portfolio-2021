import "../styles/colors.css";
import "../styles/grid.css";
import "../styles/bootstrap.css";
import "../styles/_globals.css";

import ThemeContextProvider from "../contexts/ThemeContext";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import Script from 'next/script';
import { NextIntlProvider } from 'next-intl'; // 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0H7QWYBQYN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0H7QWYBQYN', { 'debug_mode':true });
        `}
      </Script>
      <ThemeContextProvider>
        <NextIntlProvider messages={pageProps.messages}>
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
        </NextIntlProvider>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
