import Head from 'next/head';
import { useEffect, useState } from 'react';
import LoginDialog from './login/login.dialog';

export default function HomePage() {
  const [isLoginDialogOpened, setIsLoginDialogOpened] = useState(true);

  useEffect(() => {
    window.onclick = (e) => {
      if (e.target && e.target.id === 'dialog-backdrop') {
        setIsLoginDialogOpened(false);
      } else setIsLoginDialogOpened(true);
    };
  }, []);

  return (
    <div
      className={`justify-center items-center w-full min-h-screen bg-gm-light-pink dark:bg-gm-light-purple`}>
      <Head>
        <title>Gummy Notes</title>
      </Head>
      <h1>BoardPage</h1>
      {isLoginDialogOpened && <LoginDialog />}
    </div>
  );
}
