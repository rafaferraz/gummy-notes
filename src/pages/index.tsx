import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

export default function Board() {
  const html = (
    <div
      className={`justify-center items-center w-full min-h-screen bg-gm-lightest-pink dark:bg-gm-light-purple`}>
      <Head>
        <title>Gummy Notes</title>
        <meta name="description" content="Gummy Notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`flex gap-2 pl-2 flex-row justify-start items-center h-20 bg-gm-dark-pink dark:bg-gm-dark-blue`}>
        <Image src="/post-it.png" alt="Gummy Notes logo" width={50} height={50} />
        <h1 className={`text-white font-extrabold text-5xl`}>Gummy Notes</h1>
      </div>
      <div className={`w-[340px] h-screen bg-gm-light-pink dark:bg-gm-purple flex flex-col`}>
        <span className={`mt-9 text-5xl font-bold text-gm-dark-pink dark:text-white text-center`}>
          Quadros
        </span>
      </div>
    </div>
  );

  return html;
}
