import { useState } from 'react';

export default function ToolsBar() {
  return (
    <div
      className={`w-[700px] h-[150px] flex flex-row justify-evenly items-center mx-auto my-14 rounded-[80px] bg-gm-light-pink dark:bg-gm-purple`}>
      <span className={`material-icons text-8xl w-24 text-gm-darkest-pink dark:text-black`}>
        palette
      </span>
      <span className={`material-icons text-8xl text-gm-darkest-pink dark:text-black`}>
        add_box
      </span>
      <span className={`material-icons text-8xl text-gm-darkest-pink dark:text-black`}>mood</span>
    </div>
  );
}
