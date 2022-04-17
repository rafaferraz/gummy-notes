import Head from 'next/head';
import React from 'react';
import BaseFormInput from '../../components/forms/base.input';

export default function SignUp() {
  const html = (
    <div
      className={`flex justify-center items-center w-full min-h-screen bg-gm-lightest-pink`}>
      <Head>
        <title>Gummy Notes</title>
        <meta name="description" content="Gummy Notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`w-[430px] h-[660px] rounded-[50px] bg-gm-pink flex flex-col justify-evenly items-center`}>
        <h1 className={`text-5xl text-white font-extrabold`}>Crie sua conta</h1>
        <div>
          <BaseFormInput
            onChange={(e) => {
              console.log(' ');
            }}
            placeholder={'Nome'}
            className={`w-[350px] h-[70px] text-white rounded-2xl border-[3px] border-white bg-gm-dark-pink`}
          />
          <BaseFormInput
            onChange={(e) => {
              console.log(' ');
            }}
            placeholder={'E-mail'}
            className={`w-[350px] h-[70px] my-[17px] text-white rounded-2xl border-[3px] border-white bg-gm-dark-pink`}
          />
          <BaseFormInput
            onChange={(e) => {
              console.log(' ');
            }}
            placeholder={'Senha'}
            className={`w-[350px] h-[70px] text-white rounded-2xl border-[3px] border-white bg-gm-dark-pink`}
          />
        </div>
        <button
          onClick={() => {
            () => {
              console.log(' ');
            };
          }}
          className={`w-72 h-24 rounded-2xl bg-gm-button-green text-gm-text-button-purple shadow-gm-sm text-3xl font-extrabold flex justify-center items-center`}>
          Cadastrar
        </button>
        <span className={`text-gm-lm-purple font-bold`}>Continuar sem uma conta</span>
      </div>
    </div>
  );
  return html;
}
