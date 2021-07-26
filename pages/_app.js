import "../styles/globals.css";

import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>VTS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}