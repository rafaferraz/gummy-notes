import { createContext, ReactNode } from 'react';
import DependenciesContainer from '../dependencies.container';
import Note from '../models/note.model';

type NotesContextData = {
  saveNote: (noteToSave: Note) => Promise<Note | undefined>;
  findNoteById: (noteId: string) => Promise<Note | undefined>;
  findBoardNotes: (boardId: string) => Promise<Note[] | undefined>;
  updateAndSaveNote: (noteToUpdate: Note) => Promise<Note | undefined>;
  removeNoteById: (noteId: string) => Promise<void>;
};

type NotesProviderProps = {
  children: ReactNode;
};

export const NotesContext = createContext<NotesContextData>({
  saveNote: async () => undefined,
  findNoteById: async () => undefined,
  findBoardNotes: async () => undefined,
  updateAndSaveNote: async () => undefined,
  removeNoteById: async () => undefined
});

export default function NotesProvider({ children }: NotesProviderProps) {
  const notesRepository = DependenciesContainer.instance.notesRepository;

  async function saveNote(noteToSave: Note) {
    const savedNote = await notesRepository.create(noteToSave);
    return savedNote;
  }

  async function findNoteById(noteId: string) {
    const note = await notesRepository.findOneById(noteId);
    return note;
  }

  async function findBoardNotes(boardId: string) {
    const notes = await notesRepository.findAllNotesOfBoard(boardId);
    return notes;
  }

  async function updateAndSaveNote(noteToUpdate: Note) {
    const savedNote = await notesRepository.update(noteToUpdate);
    return savedNote;
  }

  async function removeNoteById(noteId: string) {
    await notesRepository.delete(noteId);
  }

  return (
    <NotesContext.Provider
      value={{ saveNote, findNoteById, findBoardNotes, updateAndSaveNote, removeNoteById }}>
      {children}
    </NotesContext.Provider>
  );
}
