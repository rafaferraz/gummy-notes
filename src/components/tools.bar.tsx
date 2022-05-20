import { TwitterPicker } from 'react-color';
import PostIt from './postit';

export default function ToolsBar({
  onClick
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div
      className={`w-[700px] h-[150px] flex flex-row justify-evenly items-center mx-auto my-14 rounded-[80px] bg-gm-light-pink dark:bg-gm-purple`}>
      <div className={`flex flex-col`}>
        <TwitterPicker
          className={`absolute `}
          width={'160px'}
          colors={['#DBBEF9', '#AFDEFA', '#BDF6E3', '#FBF5C5', '#FFC3C1']}
          triangle={'hide'}
        />
        <span
          className={`cursor-pointer material-icons text-8xl w-24 text-gm-darkest-pink dark:text-black`}>
          palette
        </span>
      </div>
      <PostIt className={`cursor-pointer`} />
      <span
        className={`cursor-pointer material-icons text-8xl text-gm-darkest-pink dark:text-black`}>
        mood
      </span>
    </div>
  );
}
