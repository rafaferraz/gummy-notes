type DialogProps = {
  title: string;
  onClose?: () => void;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

export default function BaseDialog({ title, onClose, content, footer }: DialogProps) {
  return (
    <div className={`fixed block inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}>
      <div
        className={`relative my-auto mx-auto p-5 border w-96 shadow-lg bg-gm-dark-purple rounded-lg`}>
        <h1 className={`text-white text-3xl`}>{title}</h1>
        {content}
        {footer}
      </div>
    </div>
  );
}
