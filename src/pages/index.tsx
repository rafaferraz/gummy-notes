import Head from 'next/head';
import BaseDialog from '../components/dialogs/base.dialog';

export default function HomePage() {
  return (
    <div className={`justify-center items-center w-full min-h-screen bg-gm-light-purple`}>
      <Head>
        <title>Gummy Notes</title>
        <meta name="description" content="Gummy Notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseDialog title="Bem vindo(a)!" content={_buildDialogContent()} />
    </div>
  );
}

function _buildDialogContent() {
  return (
    <>
      <div className={'flex flex-row gap-2 justify-center items-center'}>
        <span>Não tem uma conta?</span>
        <span>Cadastre-se</span>
      </div>
    </>
  );
}
