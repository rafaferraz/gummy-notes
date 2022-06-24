import px2vw from '../utils/px2vw';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import NavigationBar from '../components/navigation.bar';
import LeftDrawer from '../components/left.drawer';
import PostIt from '../components/postit';
import { ColorResult, TwitterPicker } from 'react-color';
import { AuthContext } from '../contexts/auth.context';
import { UsersContext } from '../contexts/users.context';
import { NotesContext } from '../contexts/notes.context';
import { BoardsContext } from '../contexts/boards.context';
import { useRouter } from 'next/router';
import { CirclePicker } from 'react-color';
import { Container } from '../components/common/container';
import Board from '../models/board.model';
import { BoardContainer } from '../components/board/board';
import User from '../models/user.model';

enum PageState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR'
}

export default function HomePage() {
  const [pageState, setPageState] = useState<PageState>(PageState.LOADING);
  const [user, setUser] = useState<User>();
  const [boards, setBoards] = useState<Board[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<Board>();
  const [postIts, setPostIts] = useState<any>([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const showOrHide = () => setShowColorPicker(!showColorPicker);
  const [color, setColor] = useState('#FBF5C5');
  const { isAuthenticated } = useContext(AuthContext);
  const { getData } = useContext(UsersContext);
  const { findUsersBoards, saveBoard, updateAndSaveBoard, removeBoardById } =
    useContext(BoardsContext);
  const router = useRouter();

  async function initialize() {
    setPageState(PageState.LOADING);
    if (isAuthenticated) {
      const user = await getData();
      if (!user) {
        setPageState(PageState.ERROR);
        console.log('Error: user not found');
        return;
      }
      setUser(user);
      const boards = await findUsersBoards();
      if (!boards || boards.length == 0) addNewBoard();
      else setBoards(boards);
    }
    if (!isAuthenticated) {
      setBoards([]);
    }
    setPageState(PageState.LOADED);
  }

  useEffect(() => {
    initialize();
  }, [isAuthenticated]);

  async function addNewBoard() {
    if (!user) return;
    const board = new Board();
    board.userId = user.id;
    const savedBoard = await saveBoard(board);
    if (savedBoard) setBoards([...boards, savedBoard]);
  }

  async function removeBoard(boardToRemove: Board) {
    await removeBoardById(boardToRemove.id);
    if (selectedBoard && boardToRemove.id == selectedBoard.id) setSelectedBoard(undefined);
    setBoards(boards.filter((board) => board.id != boardToRemove.id));
  }

  async function renameBoard(renamedBoard: Board): Promise<boolean> {
    const savedBoard = await updateAndSaveBoard(renamedBoard);
    if (savedBoard)
      setBoards(boards.map((board) => (board.id == savedBoard.id ? savedBoard : board)));
    return savedBoard != undefined;
  }

  const addPostIt = (e: any) => {
    e.preventDefault();
    setPostIts([...postIts, { name: 'Novo Postit', id: postIts.length + 1 }]);
  };

  const handleChangePostIt = (e: any, index: number) => {
    postIts[index].name = e.target.value;
    postIts[index].id = index + 1;
    setPostIts([...postIts]);
  };

  const handleColorChange = (color: ColorResult) => {
    setColor(color.hex);
  };

  return (
    <Container className="min-w-screen min-h-screen">
      <Head>
        <title>Gummy Notes</title>
      </Head>
      <div
        className={`flex flex-col justify-start w-full min-h-screen bg-gm-lightest-pink dark:bg-gm-light-purple`}>
        <NavigationBar />
        <div className={`flex flex-row grow`}>
          <LeftDrawer
            boards={boards}
            selectedBoard={selectedBoard}
            onBoardSelected={(boardSelected: Board) => setSelectedBoard(boardSelected)}
            onAddBoard={addNewBoard}
            onBoardRemoved={removeBoard}
            onRenamedBoard={renameBoard}
          />
          <BoardContainer />
        </div>
      </div>
    </Container>
  );
}
