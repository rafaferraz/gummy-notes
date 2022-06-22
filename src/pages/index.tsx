import px2vw from '../utils/px2vw';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import NavigationBar from '../components/navigation.bar';
import LeftDrawer from '../components/left.drawer';
import PostIt from '../components/postit';
import { TwitterPicker } from 'react-color';
import { AuthContext } from '../contexts/auth.context';
import { UsersContext } from '../contexts/users.context';
import { NotesContext } from '../contexts/notes.context';
import { BoardsContext } from '../contexts/boards.context';
import { useRouter } from 'next/router';
import { CirclePicker } from 'react-color';

export default function HomePage() {
  const [postIts, setPostIts] = useState<any>([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const showOrHide = () => setShowColorPicker(!showColorPicker);
  const [color, setColor] = useState('#FBF5C5');
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

  const handleColorChange = (color) => {
    setColor(color.hex);
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
          <div className={`container w-full h-[720px]`}>
            {postIts.map((index: number) => (
              <PostIt
                color={color}
                key={index}
                name={'postIt'}
                id={`postIt-${index + 1}`}
                onChange={(e: any) => handleChangePostIt(e, index)}
              />
            ))}
          </div>
          <div
            className={`w-1/2 h-max py-8 flex flex-row justify-evenly items-center mb-14 rounded-[80px] bg-gm-light-pink dark:bg-gm-purple`}>
            <div className={`flex flex-col items-center gap-2`}>
              {showColorPicker ? (
                <CirclePicker
                  className={`absolute bottom-40 border-2 py-2 border-gm-darkest-pink rounded-2xl bg-gm-lightest-pink dark:bg-gm-light-purple dark:border-black flex gap-2 justify-center items-center`}
                  circleSpacing={0}
                  width={px2vw(128)}
                  color={color}
                  colors={['#DBBEF9', '#AFDEFA', '#BDF6E3', '#FBF5C5', '#FFC3C1']}
                  onChangeComplete={handleColorChange}
                />
              ) : null}
              <button
                className={`w-32 cursor-pointer material-icons text-8xl w-24 text-gm-darkest-pink dark:text-black`}
                onClick={showOrHide}>
                palette
              </button>
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
