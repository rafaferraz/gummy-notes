type ActionButtonProps = {
  text: string;
  icon?: string;
  onClick?: () => void;
};

export default function ActionButton({ text, icon, onClick }: ActionButtonProps) {
  return (
    <button
      className="px-1 py-0.5 rounded-lg text-white hover:bg-gm-darkest-pink hover:dark:bg-gm-black"
      onClick={onClick}>
      <div className="flex flex-row justify-evenly items-center gap-1">
        {icon && (
          <span className="material-icons text-[24px] font-extrabold text-center">{icon}</span>
        )}
        <span className="text-md font-semibold tracking-wider text-center">{text}</span>
      </div>
    </button>
  );
}
