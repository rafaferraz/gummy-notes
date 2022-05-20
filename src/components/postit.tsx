import HomePage from '../pages/index';

export default function PostIt({
  className = '',
  onClick = () => {
    HomePage.addPostIt();
  }
}: {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className={className}>
      <div className={`drop-shadow-xl flex flex-row justify-end items-end`}>
        <span className={`w-24 h-24 rounded-br-[20px] bg-notes-yellow`}></span>
        <span
          className={`w-[20px] h-[20px] rounded-br-[20px] absolute  bg-notes-dark-yellow`}></span>
      </div>
    </div>
  );
}
