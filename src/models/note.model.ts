export type NoteProps = {
  id: string;
  text?: string;
  sticker?: string;
  color: string;
  boardId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
};

export default class Note {
  id = '';
  text?: string;
  sticker?: string;
  color = '';
  boardId = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  static fromJson(json: NoteProps): Note {
    const note = new Note();
    note.id = json.id;
    note.text = json.text;
    note.sticker = json.sticker;
    note.color = json.color;
    note.boardId = json.boardId;
    note.createdAt = new Date(json.createdAt);
    note.updatedAt = new Date(json.updatedAt);
    return note;
  }

  toJson(): NoteProps {
    return {
      id: this.id,
      text: this.text,
      sticker: this.sticker,
      color: this.color,
      boardId: this.boardId,
      createdAt: this.createdAt.toUTCString(),
      updatedAt: this.updatedAt.toUTCString()
    };
  }
}
