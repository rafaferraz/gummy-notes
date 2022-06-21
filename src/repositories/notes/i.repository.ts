import Note from '../../models/note.model';

export default interface INotesRepository {
  create(note: Note): Promise<Note | undefined>;
  findOneById(noteId: string): Promise<Note | undefined>;
  findAllNotesOfBoard(boardId: string): Promise<Note[] | undefined>;
  update(note: Note): Promise<Note | undefined>;
  delete(noteId: string): Promise<void>;
}
