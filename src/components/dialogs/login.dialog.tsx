import { useState } from 'react';
import BaseDialog from '../../components/dialogs/base.dialog';
import BaseFormInput from '../../components/forms/base.input';

type LoginDialogProps = {
  onClose: () => void;
};

export default function LoginDialog({ onClose }: LoginDialogProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    console.log(`Form submitted with email: ${email}`);
  }

  return (
    <BaseDialog title="Bem vindo(a)!" onClose={onClose}>
      <div className={'flex flex-col gap-2 justify-center items-center'}>
        <div className={'flex flex-row gap-2 justify-center items-center mt-8 mb-4'}>
          <span className={`text-white text-sm font-medium`}>Não tem uma conta?</span>
          <span className={`cursor-pointer text-white font-semibold tracking-wider text-sm`}>
            Cadastre-se
          </span>
        </div>
        <BaseFormInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={'E-mail'}
          className={`text-white rounded-xl text-md`}
        />
        <BaseFormInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          obscure={true}
          obscureIconStyle="cursor-pointer material-icons text-xl"
          placeholder={'Senha'}
          className={`text-white rounded-xl text-md`}
        />
        <button
          onClick={onSubmit}
          className={`text-xl font-bold tracking-widest shadow-gm-sm py-3 mt-8 px-16 rounded-lg bg-gm-button-green hover:bg-gm-button-green/[.7] dark:bg-gm-light-purple hover:dark:bg-gm-purple text-gm-text-button-purple dark:text-white`}>
          Entrar
        </button>
        <button
          onClick={onClose}
          className={`mt-6 cursor-pointer text-white font-semibold tracking-wider text-sm`}>
          Continuar sem uma conta
        </button>
      </div>
    </BaseDialog>
  );
}
