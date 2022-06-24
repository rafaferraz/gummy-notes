import { useState } from 'react';
import Board from '../../models/board.model';
import { Button } from '../common/button';
import { Container } from '../common/container';
import { Input } from '../common/input';
import { Span } from '../common/span';

interface BoardDrawerItemProps extends React.HTMLAttributes<HTMLDivElement> {
  board: Board;
  onSelected?: (board: Board) => void;
  isSelected?: boolean;
  onRemoved?: (board: Board) => void;
  onRenamed?: (board: Board) => Promise<boolean>;
  enableTooltip?: boolean;
}

export function BoardDrawerItem({
  board,
  onRemoved = () => undefined,
  onRenamed = async () => false,
  onSelected = () => undefined,
  enableTooltip = false,
  isSelected = false
}: BoardDrawerItemProps) {
  const [boardTitle, setBoardTitle] = useState(board.title);
  const [previousBoardTitle, setPreviousBoardTitle] = useState(board.title);
  const [isEditing, setIsEditing] = useState(false);
  const colorStyle = isSelected
    ? 'text-gm-darkest-pink dark:text-white'
    : 'text-gm-lm-grey dark:text-gm-dark-blue';

  return (
    <Container className="flex flex-row items-center justify-between gap-1">
      <Container className="flex flex-row items-center justify-center gap-1">
        <Button
          className={'flex flex-row p-1 items-center hover:bg-white/[.2] rounded-lg'}
          onClick={() => onSelected(board)}>
          <Span className={`material-icons-round ${colorStyle} text-2xl`}>sticky_note_2</Span>
        </Button>
        <Input
          className={`w-full bg-transparent outline-0 font-bold pl-1 py-1 rounded-lg border border-transparent focus:border-white hover:border-white ${colorStyle} ${
            isEditing ? 'cursor-text' : 'cursor-pointer'
          }`}
          value={boardTitle}
          defaultValue={Board.defaultTitle}
          onChange={(e) => {
            setPreviousBoardTitle(board.title);
            setBoardTitle(e.target.value);
            board.title = e.target.value;
          }}
          readOnly={!isEditing}
          onDoubleClick={async () => {
            if (isEditing) {
              const success = await onRenamed(board);
              if (!success) setBoardTitle(previousBoardTitle);
            }
            setIsEditing(!isEditing);
          }}
          onClick={() => {
            if (isEditing) return;
            onSelected(board);
          }}
        />
      </Container>
      <Container className="flex flex-row items-center justify-center gap-1">
        <Button
          className={'flex flex-row p-1 items-center hover:bg-white/[.2] rounded-lg'}
          onClick={async () => {
            if (isEditing) {
              const success = await onRenamed(board);
              if (!success) setBoardTitle(previousBoardTitle);
            }
            setIsEditing(!isEditing);
          }}>
          <Span
            className={`material-icons-round text-2xl ${
              isEditing ? 'text-green-500' : 'text-orange-500'
            }`}>
            {isEditing ? 'done' : 'edit'}
          </Span>
        </Button>
        <Button
          className={'flex flex-row p-1 items-center hover:bg-white/[.2] rounded-lg'}
          onClick={() => onRemoved(board)}>
          <Span className={`material-icons-round text-red-500 text-2xl`}>clear</Span>
        </Button>
      </Container>
    </Container>
  );
}
