import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import Board from '../models/board.model';
import { BoardDrawerItem } from './board/drawer.item';
import { Button } from './common/button';
import { Container } from './common/container';
import { Span } from './common/span';
import { DrawerContainer } from './drawer/drawer.container';

interface LeftDrawerProps {
  boards: Board[];
  selectedBoard?: Board;
  onRenamedBoard: (board: Board) => Promise<boolean>;
  onBoardSelected: (board: Board) => void;
  onBoardRemoved: (board: Board) => void;
  onAddBoard: () => void;
}

export default function LeftDrawer({
  boards,
  selectedBoard,
  onBoardRemoved,
  onBoardSelected,
  onRenamedBoard,
  onAddBoard
}: LeftDrawerProps) {
  const { isAuthenticated } = useContext(AuthContext);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  return (
    <DrawerContainer
      className={`min-w-[40px] flex flex-col gap-4 justify-start items-start py-2 px-1 transition-[width] duration-1000 ease-in-out overflow-x-hidden overflow-y-auto bg-gm-light-pink dark:bg-gm-purple ${
        isDrawerOpened ? 'w-[28%]' : 'w-[40px]'
      }`}>
      <Button
        className={'flex flex-col p-1 hover:bg-white/[.2] rounded-lg self-end'}
        onClick={() => setIsDrawerOpened(!isDrawerOpened)}>
        <Span className={'self-center material-icons-round text-white text-2xl'}>
          {isDrawerOpened ? 'arrow_back' : 'arrow_forward'}
        </Span>
      </Button>
      <Span
        className={`self-center text-white font-semibold text-4xl transition-[opacity] duration-1000 ease-linear ${
          isDrawerOpened ? 'opacity-100' : 'opacity-0'
        }`}>
        Quadros
      </Span>
      <Container
        className={`flex flex-col justify-start items-start grow w-full overflow-x-hidden gap-2`}>
        {boards.map((board, index) => (
          <BoardDrawerItem
            key={index}
            board={board}
            onRemoved={onBoardRemoved}
            onRenamed={onRenamedBoard}
            onSelected={onBoardSelected}
            enableTooltip={false}
            isSelected={selectedBoard && board.id == selectedBoard.id}
          />
        ))}
        {isAuthenticated && (
          <Button
            className={`flex flex-row p-1 items-center hover:bg-white/[.2] rounded-lg gap-2.5`}
            onClick={onAddBoard}>
            <Span className={`material-icons-round text-gm-lm-purple dark:text-black text-2xl`}>
              add
            </Span>
            {isDrawerOpened && (
              <Span
                className={`text-gm-lm-purple dark:text-black text-base font-extrabold whitespace-nowrap`}>
                Novo quadro
              </Span>
            )}
          </Button>
        )}
        {!isAuthenticated && (
          <Container className={`flex flex-row p-1 items-center rounded-lg gap-2.5`}>
            <Span className={`material-icons-round text-gm-lm-purple dark:text-black text-2xl`}>
              pending
            </Span>
            <Span
              className={`text-gm-lm-purple dark:text-black text-base font-extrabold whitespace-nowrap`}>
              Entre para continuar
            </Span>
          </Container>
        )}
      </Container>
    </DrawerContainer>
  );
}
