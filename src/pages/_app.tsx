import { AppProps } from 'next/app';
import Head from 'next/head';
import AuthProvider from '../contexts/auth.context';
import BoardsProvider from '../contexts/boards.context';
import NotesProvider from '../contexts/notes.context';
import UsersProvider from '../contexts/users.context';
import '../styles/globals.css';
import '../styles/material-icons.css';

function GummyNotes({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UsersProvider>
        <BoardsProvider>
          <NotesProvider>
            <Head>
              <meta name="description" content="Gummy Notes" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
          </NotesProvider>
        </BoardsProvider>
      </UsersProvider>
    </AuthProvider>
  );
}

export default GummyNotes;
