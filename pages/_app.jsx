import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "react-circular-progressbar/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Practice Music</title>
        <meta
          name="description"
          content="Practice Music makes practicing more rewarding, with a practice
          music buddy, rainbow colors and a competitive leaderboard!"
        />
        <meta property="og:title" content="Practice Music" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta
          property="og:description"
          content="Practice Music makes practicing more rewarding, with a practice music buddy, rainbow colors and a competitive leaderboard!"
        />
        <meta property="og:image" content="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
