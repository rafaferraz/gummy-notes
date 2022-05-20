import Head from 'next/head';
import { useEffect } from 'react';
import { useState } from 'react';
import NavigationBar from '../components/navigation.bar';
import LeftDrawer from '../components/left.drawer';
import ToolsBar from '../components/tools.bar';
import PostIt from '../components/postit';
import Draggable from 'react-draggable';

export default function HomePage() {
  const [postIts, setPostIts] = useState([]);

  const addPostIt = (e) => {
    e.preventDefault();
    setPostIts([...postIts, { name: 'Novo Postit', id: postIts.length + 1 }]);
  };

  const handleChangePostIt = (e, index) => {
    postIts[index].name = e.target.value;
    postIts[index].id = index + 1;
    setPostIts([...postIts]);
  };

  useEffect(() => {
    const darkIsOnStorage = localStorage.getItem('dark') != null;
    let isDarkModeActive = false;
    if (darkIsOnStorage) isDarkModeActive = localStorage.getItem('dark') == 'true';
    else localStorage.setItem('dark', 'false');
    document.documentElement.classList.toggle('dark', isDarkModeActive);
  });

  return (
    <div
      className={`justify-center items-center w-full min-h-screen bg-gm-lightest-pink dark:bg-gm-light-purple`}>
      <Head>
        <title>Gummy Notes</title>
      </Head>
      <NavigationBar />
      <div className={`flex flex-row items-end`}>
        <LeftDrawer />
        <ToolsBar onClick={addPostIt} />
        <Draggable>
          <span>
            <PostIt />
          </span>
        </Draggable>
      </div>
    </div>
  );
}
