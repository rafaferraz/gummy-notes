import Head from 'next/head';
import { useEffect } from 'react';
import NavigationBar from '../components/navigation.bar';

export default function HomePage() {
  useEffect(() => {
    const darkIsOnStorage = localStorage.getItem('dark') != null;
    let isDarkModeActive = false;
    if (darkIsOnStorage) isDarkModeActive = localStorage.getItem('dark') == 'true';
    else localStorage.setItem('dark', 'false');
    document.documentElement.classList.toggle('dark', isDarkModeActive);
  });

  return (
    <div
      className={`justify-center items-center w-full min-h-screen bg-gm-light-pink dark:bg-gm-light-purple`}>
      <Head>
        <title>Gummy Notes</title>
      </Head>
      <NavigationBar />
    </div>
  );
}
