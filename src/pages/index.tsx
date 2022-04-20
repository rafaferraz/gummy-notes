import Head from 'next/head';
import NavigationBar from '../components/navigation.bar';

export default function HomePage() {
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
