type DrawerButtonProps = {
  icon?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function DrawerButton({ icon = 'menu', onClick, children }: DrawerButtonProps) {
  return (
    <>
      <button className="" onClick={onClick}>
        <span className="material-icons p-0.5 rounded-lg text-white text-2xl font-extrabold text-center hover:bg-gm-light-pink">
          {icon}
        </span>
      </button>
      {children}
    </>
  );
}
