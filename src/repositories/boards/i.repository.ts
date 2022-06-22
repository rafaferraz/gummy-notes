import Board from '../../models/board.model';

export default interface IBoardsRepository {
  create(board: Board): Promise<Board | undefined>;
  findOneById(boardId: string): Promise<Board | undefined>;
  findAll(): Promise<Board[] | undefined>;
  update(board: Board): Promise<Board | undefined>;
  delete(boardId: string): Promise<void>;
}
