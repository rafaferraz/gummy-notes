import { createContext, ReactNode } from 'react';
import DependenciesContainer from '../dependencies.container';
import Board from '../models/board.model';

type BoardsContextData = {
  saveBoard: (boardToSave: Board) => Promise<Board | undefined>;
  findBoardById: (boardId: string) => Promise<Board | undefined>;
  findUsersBoards: () => Promise<Board[] | undefined>;
  updateAndSaveBoard: (boardToUpdate: Board) => Promise<Board | undefined>;
  removeBoardById: (boardId: string) => Promise<void>;
};

type BoardsProviderProps = {
  children: ReactNode;
};

export const BoardsContext = createContext<BoardsContextData>({
  saveBoard: async () => undefined,
  findBoardById: async () => undefined,
  findUsersBoards: async () => undefined,
  updateAndSaveBoard: async () => undefined,
  removeBoardById: async () => undefined
});

export default function BoardsProvider({ children }: BoardsProviderProps) {
  const boardsRepository = DependenciesContainer.instance.boardsRepository;

  async function saveBoard(boardToSave: Board) {
    const savedBoard = await boardsRepository.create(boardToSave);
    return savedBoard;
  }

  async function findBoardById(boardId: string) {
    const board = await boardsRepository.findOneById(boardId);
    return board;
  }

  async function findUsersBoards() {
    const boards = await boardsRepository.findAll();
    return boards;
  }

  async function updateAndSaveBoard(boardToUpdate: Board) {
    const savedBoard = await boardsRepository.update(boardToUpdate);
    return savedBoard;
  }

  async function removeBoardById(boardId: string) {
    await boardsRepository.delete(boardId);
  }

  return (
    <BoardsContext.Provider
      value={{ saveBoard, findBoardById, findUsersBoards, updateAndSaveBoard, removeBoardById }}>
      {children}
    </BoardsContext.Provider>
  );
}
