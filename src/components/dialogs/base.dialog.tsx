import { useEffect } from 'react';

type DialogProps = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export default function BaseDialog({ title, onClose, children, footer }: DialogProps) {
  function _handleDialogClose() {
    const dialog = document.getElementById('dialog-backdrop');
    window.addEventListener('click', (event) => {
      if (event.target === dialog) {
        onClose();
      }
    });
  }

  useEffect(() => {
    _handleDialogClose();
  });

  return (
    <div id="dialog-backdrop" className={`fixed block inset-0 backdrop-blur-sm h-full w-full`}>
      <div
        className={`relative object-center max-w-[324px] lg:w-full px-6 py-8 shadow-lg bg-gm-pink dark:bg-gm-dark-purple rounded-[2rem]`}>
        <h1 className={`text-white tracking-wider text-3xl text-center font-semibold`}>{title}</h1>
        {children}
        {footer}
      </div>
    </div>
  );
}
