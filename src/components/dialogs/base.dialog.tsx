type DialogProps = {
  title: string;
  onClose?: () => void;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

export default function BaseDialog({ title, onClose, content, footer }: DialogProps) {
  return (
    <div
      className={`fixed ${
        true ? 'block' : 'hidden'
      } inset-0 backdrop-blur-sm overflow-y-auto h-full w-full`}>
      <div className={`relative my-auto mx-auto px-3 py-5 shadow-lg bg-gm-dark-purple rounded-lg`}>
        <h1 className={`text-white text-3xl text-center font-semibold`}>{title}</h1>
        {content}
        {footer}
      </div>
    </div>
  );
}
