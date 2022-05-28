import Head from 'next/head';
import { useEffect } from 'react';
import { useState } from 'react';
import NavigationBar from '../components/navigation.bar';
import LeftDrawer from '../components/left.drawer';
import ToolsBar from '../components/tools.bar';
import PostIt from '../components/postit';
import Draggable from 'react-draggable';
import { TwitterPicker } from 'react-color';

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
        <div className={`flex flex-col items-center w-full h-full`}>
          <div className={`container h-[543px]`}>
            {postIts.map((index) => (
              <PostIt
                key={index}
                name={'postIt'}
                id={`postIt-${index + 1}`}
                onChange={(e) => handleChangePostIt(e, index)}
              />
            ))}
          </div>
          <div
            className={`w-[700px] h-[150px] flex flex-row justify-evenly items-center mb-14 rounded-[80px] bg-gm-light-pink dark:bg-gm-purple`}>
            <div className={`flex flex-col`}>
              <TwitterPicker
                className={`absolute`}
                width={'160px'}
                colors={['#DBBEF9', '#AFDEFA', '#BDF6E3', '#FBF5C5', '#FFC3C1']}
                triangle={'hide'}
              />
              <span
                className={`cursor-pointer material-icons text-8xl w-24 text-gm-darkest-pink dark:text-black`}>
                palette
              </span>
            </div>
            <div className={`cursor-pointer drop-shadow-xl flex flex-row justify-end items-end`}>
              <button
                className={`w-24 h-24 rounded-br-[20px] bg-notes-yellow`}
                onClick={addPostIt}></button>
              <span
                className={`w-[20px] h-[20px] rounded-br-[20px] absolute bg-notes-dark-yellow`}></span>
            </div>
            <span
              className={`cursor-pointer material-icons text-8xl text-gm-darkest-pink dark:text-black`}>
              mood
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
