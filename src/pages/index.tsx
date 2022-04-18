import Head from 'next/head';
import { useState } from 'react';
import BaseDialog from '../components/dialogs/base.dialog';
import BaseFormInput from '../components/forms/base.input';

export default function HomePage() {
  const [isLoginDialogOpened, setIsLoginDialogOpened] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className={`justify-center items-center w-full min-h-screen bg-gm-light-purple`}>
      <Head>
        <title>Gummy Notes</title>
      </Head>
      <h1>BoardPage</h1>
      <BaseDialog title="Bem vindo(a)!" content={_buildDialogContent()} />
    </div>
  );
}

function _buildDialogContent() {
  return (
    <div className={'flex flex-col gap-2 justify-center items-center'}>
      <div className={'flex flex-row gap-2 justify-center items-center'}>
        <span>Não tem uma conta?</span>
        <span>Cadastre-se</span>
      </div>
      <BaseFormInput onChange={(e) => {}} placeholder="E-mail" />
    </div>
  );
}
