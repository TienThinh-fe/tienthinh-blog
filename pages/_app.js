import Head from "next/head";
import "highlight.js/styles/night-owl.css";

import "../styles/reset.css";
import "../styles/globals.css";

import favicon from "../public/favicon.ico";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <title>TienThinh | Some random posts</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
