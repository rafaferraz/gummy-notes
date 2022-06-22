import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import NavigationBar from '../components/navigation.bar';
import LeftDrawer from '../components/left.drawer';
import ToolsBar from '../components/tools.bar';
import PostIt from '../components/postit';
import { TwitterPicker } from 'react-color';
import { AuthContext } from '../contexts/auth.context';
import { UsersContext } from '../contexts/users.context';
import { NotesContext } from '../contexts/notes.context';
import { BoardsContext } from '../contexts/boards.context';
import { useRouter } from 'next/router';

export default function HomePage() {
  const [postIts, setPostIts] = useState<any>([]);
  const { isAuthenticated } = useContext(AuthContext);
  const { getData } = useContext(UsersContext);
  const { findBoardNotes, saveNote, updateAndSaveNote, removeNoteById } = useContext(NotesContext);
  const { findUsersBoards, saveBoard, updateAndSaveBoard } = useContext(BoardsContext);
  const router = useRouter();

  async function initialize() {
    if (isAuthenticated) {
      const user = await getData();
    }
  }

  useEffect(() => {
    initialize();
  }, []);

  const addPostIt = (e: any) => {
    e.preventDefault();
    setPostIts([...postIts, { name: 'Novo Postit', id: postIts.length + 1 }]);
  };

  const handleChangePostIt = (e: any, index: number) => {
    postIts[index].name = e.target.value;
    postIts[index].id = index + 1;
    setPostIts([...postIts]);
  };

  useEffect(() => {
    if (!isAuthenticated) console.log('Usuário não autenticado');
  }, [isAuthenticated]);

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
            {postIts.map((index: number) => (
              <PostIt key={index} />
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
