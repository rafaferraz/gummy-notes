import { debuglog } from 'util';
import Board, { BoardProps } from '../../../models/board.model';
import Token from '../../../models/token.model';
import IHttpClient from '../../../services/http/i.client';
import IBoardsRepository from '../i.repository';

export default class ServerBoardsRepository implements IBoardsRepository {
  constructor(private readonly _httpClient: IHttpClient) {}

  async create(board: Board): Promise<Board | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.post<BoardProps>(`/boards`, board.toJson(), {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
      const newBoard = Board.fromJson(result.data);
      return newBoard;
    } catch (e) {
      debuglog(`ServerBoardsRepository.create: ${e}`);
    }
  }
  async findOneById(boardId: string): Promise<Board | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.get<BoardProps>(`/boards/${boardId}`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
      const newBoard = Board.fromJson(result.data);
      return newBoard;
    } catch (e) {
      debuglog(`ServerBoardsRepository.findOneById: ${e}`);
    }
  }
  async findAll(): Promise<Board[] | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.get<BoardProps[]>(`/boards`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
      const boards = result.data.map((boardProps) => Board.fromJson(boardProps));
      return boards;
    } catch (e) {
      debuglog(`ServerBoardsRepository.findAll: ${e}`);
    }
  }
  async update(board: Board): Promise<Board | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.patch<BoardProps>(
        `/boards/${board.id}`,
        board.toJson(),
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`
          }
        }
      );
      const updatedBoard = Board.fromJson(result.data);
      return updatedBoard;
    } catch (e) {
      debuglog(`ServerBoardsRepository.update: ${e}`);
    }
  }
  async delete(boardId: string): Promise<void> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.delete<BoardProps>(`/boards/${boardId}`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
    } catch (e) {
      debuglog(`ServerBoardsRepository.delete: ${e}`);
    }
  }
}
