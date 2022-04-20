import { useEffect } from 'react';

export default function DarkModeSwitch() {
  function _handleDarkModeSwitch() {
    const chk = document.getElementById('chk');

    chk?.addEventListener('change', () => {
      const isDarkModeActive = document.documentElement.classList.toggle('dark');
      localStorage.setItem('darkMode', isDarkModeActive ? 'true' : 'false');
    });
  }

  useEffect(() => {
    _handleDarkModeSwitch();
  });

  return (
    <div>
      <label
        className={`bg-black rounded-[50px] cursor-pointer flex items-center justify-between p-[2px] relative h-[20px] w-[40px] scale-125`}
        htmlFor="chk">
        <input type="checkbox" className={`peer opacity-0 absolute`} id="chk" />
        <span className={'material-icons text-[#ffe990]'}>dark_mode</span>
        <span className={'material-icons text-[#f39c12]'}>light_mode</span>
        <div
          className={`bg-white rounded-full absolute t-[2px] l-[2px] h-[16px] w-[16px] translate-x-0 transition-transform duration-200 ease-linear peer-checked:translate-x-[20px]`}></div>
      </label>
    </div>
  );
}
