import React, { useState } from 'react';
import BaseFormInput from '../../components/forms/base.input';
import BaseDialog from './base.dialog';

type SignUpDialogProps = {
  onClose: () => void;
};

export default function SignUpDialog({ onClose }: SignUpDialogProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    console.log(`Form submitted with email: ${email}`);
  }

  const html = (
    <BaseDialog title="Crie sua conta" onClose={onClose}>
      <div className={'flex flex-col gap-2 justify-center items-center'}>
        <div className={'my-2'}></div>
        <BaseFormInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={'Nome'}
          className={`text-white rounded-xl text-md`}
        />
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
          Cadastrar
        </button>
        <button
          onClick={onClose}
          className={`mt-6 cursor-pointer text-white font-semibold tracking-wider text-sm`}>
          Continuar sem uma conta
        </button>
      </div>
    </BaseDialog>
  );
  return html;
}
