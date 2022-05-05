import { useState } from 'react';
import DrawerButton from './buttons/drawer.button';

export default function LeftDrawer() {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  return (
    <nav className={`w-80 h-screen bg-gm-light-pink dark:bg-gm-purple`}>
      <h1 className={`py-10 text-center font-extrabold text-5xl text-gm-dark-pink dark:text-white`}>
        Quadros
      </h1>
      <div className={`flex flex-col gap-5 font-extrabold text-2xl pl-5`}>
        <p className={`text-gm-lm-grey dark:text-gm-dark-blue`}>[Título do quadro]</p>
        <p className={`text-gm-darkest-pink dark:text-white`}>[Título do quadro atual]</p>
        <button className={`text-left text-gm-lm-purple dark:text-black font-extrabold`}>
          + Novo quadro
        </button>
      </div>
    </nav>
  );
}
