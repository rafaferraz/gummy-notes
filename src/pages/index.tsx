import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import NavigationBar from '../components/navigation.bar';
import { AuthContext } from '../contexts/auth.context';
import { NotesContext } from '../contexts/notes.context';
import { UsersContext } from '../contexts/users.context';
import { BoardsContext } from '../contexts/boards.context';

export default function HomePage() {
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

  useEffect(() => {
    if (!isAuthenticated) console.log('Usuário não autenticado');
  }, [isAuthenticated]);

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
