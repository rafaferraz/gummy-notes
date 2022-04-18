import { useState } from 'react';
import BaseDialog from '../../components/dialogs/base.dialog';
import BaseFormInput from '../../components/forms/base.input';

export default function LoginDialog() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <BaseDialog title="Bem vindo(a)!">
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
          obscure={password ? true : false}
          obscureIconStyle="cursor-pointer material-icons text-xl"
          placeholder={'Senha'}
          className={`text-white rounded-xl text-md`}
        />
        <button
          onClick={(e) => console.log('')}
          className={`text-xl font-bold tracking-widest shadow-gm-sm py-3 mt-8 px-16 rounded-lg bg-gm-button-green hover:bg-gm-button-green/[.7] dark:bg-gm-light-purple hover:dark:bg-gm-purple text-gm-text-button-purple dark:text-white`}>
          Entrar
        </button>
        <span className={`mt-6 cursor-pointer text-white font-medium tracking-wider text-sm`}>
          Continuar sem uma conta
        </span>
      </div>
    </BaseDialog>
  );
}
