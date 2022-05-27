import Note, { NoteProps } from './note.model';

type BoardProps = {
  id: string;
  title: string;
  notes: NoteProps[];
  userId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export default class Board {
  id = '';
  title = '';
  notes: Note[] = [];
  userId = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  static fromJson(json: BoardProps): Board {
    const board = new Board();
    board.id = json.id;
    board.title = json.title;
    board.userId = json.userId;
    board.createdAt = new Date(json.createdAt);
    board.updatedAt = new Date(json.updatedAt);
    return board;
  }

  toJson(): BoardProps {
    return {
      id: this.id,
      title: this.title,
      userId: this.userId,
      notes: this.notes.map((note) => note.toJson()),
      createdAt: this.createdAt.toUTCString(),
      updatedAt: this.updatedAt.toUTCString()
    };
  }
}
