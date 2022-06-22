import { TwitterPicker } from 'react-color';

export default function ToolsBar({
  onClick
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div
      className={`w-[700px] h-[150px] flex flex-row justify-evenly items-center mx-auto mb-14 rounded-[80px] bg-gm-light-pink dark:bg-gm-purple`}>
      <div className={`flex flex-col`}>
        <TwitterPicker
          className={`absolute hidden`}
          width={'160px'}
          colors={['#DBBEF9', '#AFDEFA', '#BDF6E3', '#FBF5C5', '#FFC3C1']}
          triangle={'hide'}
        />
        <span
          className={`cursor-pointer material-icons text-8xl w-24 text-gm-darkest-pink dark:text-black`}>
          palette
        </span>
      </div>
      <div className={`cursor-pointer drop-shadow-xl flex flex-row justify-end items-end`}>
        <span className={`w-24 h-24 rounded-br-[20px] bg-notes-yellow`}></span>
        <span
          className={`w-[20px] h-[20px] rounded-br-[20px] absolute bg-notes-dark-yellow`}></span>
      </div>
      <span
        className={`cursor-pointer material-icons text-8xl text-gm-darkest-pink dark:text-black`}>
        mood
      </span>
    </div>
  );
}
