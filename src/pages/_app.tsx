import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/material-icons.css';

function GummyNotes({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Gummy Notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default GummyNotes;
