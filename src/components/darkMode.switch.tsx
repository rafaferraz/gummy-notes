import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(false);

  function handleOnClick() {
    setIsDarkModeActive(!isDarkModeActive);
    const darkToken = localStorage.getItem('dark');
    localStorage.setItem('dark', darkToken == 'false' ? 'true' : 'false');
    document.documentElement.classList.toggle('dark');
  }

  useEffect(() => {
    const darkToken = localStorage.getItem('dark');
    const isDarkModeActive = darkToken != null && darkToken == 'true';
    setIsDarkModeActive(isDarkModeActive);
    document.documentElement.classList.toggle('dark', isDarkModeActive);
  }, []);

  return (
    <button onClick={handleOnClick}>
      <div
        className={`bg-black rounded-[50px] cursor-pointer flex items-center justify-between p-[2px] relative h-[20px] w-[40px] scale-125`}>
        <span className={'material-icons text-[#ffe990]'}>dark_mode</span>
        <span className={'material-icons text-[#f39c12]'}>light_mode</span>
        <div
          className={`bg-white rounded-full absolute t-[2px] l-[2px] h-[16px] w-[16px] transition-transform duration-200 ease-linear ${
            isDarkModeActive ? 'translate-x-[20px]' : 'translate-x-0'
          }`}></div>
      </div>
    </button>
  );

  /* return (
    <div>
      <label
        className={`bg-black rounded-[50px] cursor-pointer flex items-center justify-between p-[2px] relative h-[20px] w-[40px] scale-125`}
        htmlFor="chk">
        <input
          type="checkbox"
          onChange={(e) => {
            console.log(e.target.value);
            setIsDarkModeActive(e.target.value == 'on');
            localStorage.setItem('dark', e.target.value == 'on' ? 'true' : 'false');
            document.documentElement.classList.toggle('dark', e.target.value == 'on');
          }}
          value={isDarkModeActive ? 'on' : 'off'}
          className={`peer opacity-0 absolute`}
        />
        <span className={'material-icons text-[#ffe990]'}>dark_mode</span>
        <span className={'material-icons text-[#f39c12]'}>light_mode</span>
        <div
          className={`bg-white rounded-full absolute t-[2px] l-[2px] h-[16px] w-[16px] translate-x-0 transition-transform duration-200 ease-linear peer-checked:translate-x-[20px]`}></div>
      </label>
    </div>
  ); */
}
