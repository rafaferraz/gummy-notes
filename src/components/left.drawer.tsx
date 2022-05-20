import { useState } from 'react';
import DrawerButton from './buttons/drawer.button';

export default function LeftDrawer() {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const [boards, setBoards] = useState([]);

  const addBoard = (e) => {
    e.preventDefault();
    setBoards([...boards, { name: 'Novo Quadro', id: boards.length + 1 }]);
  };

  const handleChangeBoard = (e, index) => {
    boards[index].name = e.target.value;
    boards[index].id = index + 1;
    setBoards([...boards]);
  };

  return (
    <nav className={`w-80 h-screen bg-gm-light-pink dark:bg-gm-purple`}>
      <h1 className={`py-10 text-center font-extrabold text-5xl text-gm-dark-pink dark:text-white`}>
        Quadros
      </h1>
      <div className={`flex flex-col gap-5 text-2xl px-5`}>
        {boards.map((board, index) => (
          <input
            key={index}
            className={`text-gm-lm-grey dark:text-gm-dark-blue font-extrabold bg-gm-light-pink dark:bg-gm-purple `}
            name={'board'}
            value={`${board.name} (${board.id})`}
            id={`board-${index + 1}`}
            onChange={(e) => handleChangeBoard(e, index)}></input>
        ))}

        {/* <p className={`text-gm-lm-grey dark:text-gm-dark-blue`}>[Título do quadro]</p>
        <p className={`text-gm-darkest-pink dark:text-white`}>[Título do quadro atual]</p> */}
        <button
          className={`text-left text-gm-lm-purple dark:text-black font-extrabold`}
          onClick={addBoard}>
          + Novo quadro
        </button>
      </div>
    </nav>
  );
}