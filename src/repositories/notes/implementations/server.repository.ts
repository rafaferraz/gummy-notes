import { debuglog } from 'util';
import Note, { NoteProps } from '../../../models/note.model';
import Token from '../../../models/token.model';
import IHttpClient from '../../../services/http/i.client';
import INotesRepository from '../i.repository';

export default class ServerNotesRepository implements INotesRepository {
  constructor(private readonly _httpClient: IHttpClient) {}
  async create(note: Note): Promise<Note | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.post<NoteProps>(`/notes`, note.toJson(), {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
      const newNote = Note.fromJson(result.data);
      return newNote;
    } catch (e) {
      debuglog(`ServerNotesRepository.create: ${e}`);
    }
  }
  async findOneById(noteId: string): Promise<Note | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.get<NoteProps>(`/notes/${noteId}`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
      const newNote = Note.fromJson(result.data);
      return newNote;
    } catch (e) {
      debuglog(`ServerNotesRepository.findOneById: ${e}`);
    }
  }
  async findAllNotesOfBoard(boardId: string): Promise<Note[] | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.get<NoteProps[]>(`/notes/of-board/${boardId}`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
      const notes = result.data.map((noteProps) => Note.fromJson(noteProps));
      return notes;
    } catch (e) {
      debuglog(`ServerNotesRepository.findAllNotesOfBoard: ${e}`);
    }
  }
  async update(note: Note): Promise<Note | undefined> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.patch<NoteProps>(`/notes/${note.id}`, note.toJson(), {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
      const updatedNote = Note.fromJson(result.data);
      return updatedNote;
    } catch (e) {
      debuglog(`ServerNotesRepository.update: ${e}`);
    }
  }
  async delete(noteId: string): Promise<void> {
    try {
      const tokenOnStorage = localStorage.getItem('token');
      if (!tokenOnStorage) return;
      const token = Token.fromJson(JSON.parse(tokenOnStorage));
      const result = await this._httpClient.delete<NoteProps>(`/notes/${noteId}`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
    } catch (e) {
      debuglog(`ServerNotesRepository.update: ${e}`);
    }
  }
}
