import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Thapa Technical" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NextNProgress color="#AE6E5F" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
