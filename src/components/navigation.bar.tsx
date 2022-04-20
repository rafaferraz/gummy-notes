import { useState } from 'react';
import ActionButton from './buttons/action.button';
import DrawerButton from './buttons/drawer.button';
import DarkModeSwitch from './darkMode.switch';
import LoginDialog from './dialogs/login.dialog';
import SignUpDialog from './dialogs/signUp.dialog';
import Logo from './logo';

type NavigationItemProps = {
  children?: React.ReactNode;
};
type SideItemsProps = {
  children?: React.ReactNode;
};

const NavigationItem = ({ children }: NavigationItemProps) => {
  return <div className="flex justify-center items-center">{children}</div>;
};

const LeftSideItems = ({ children }: SideItemsProps) => {
  return <div className={`flex flex-row justify-start items-center gap-4`}>{children}</div>;
};
const RightSideItems = ({ children }: SideItemsProps) => {
  return <div className={`flex flex-row justify-end items-center gap-4`}>{children}</div>;
};

export default function NavigationBar() {
  const [isLoginDialogOpened, setIsLoginDialogOpened] = useState(false);
  const [isSignUpDialogOpened, setIsSignUpDialogOpened] = useState(false);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  return (
    <nav
      className={`flex flex-row justify-between items-center p-2 bg-gm-dark-pink dark:bg-gm-dark-purple shadow-md`}>
      <LeftSideItems>
        <NavigationItem>
          <Logo />
        </NavigationItem>
      </LeftSideItems>
      <RightSideItems>
        <NavigationItem>
          <DarkModeSwitch />
        </NavigationItem>
        <>
          <div className="hidden md:flex flex-row">
            <NavigationItem>
              <ActionButton text="Entrar" onClick={() => setIsLoginDialogOpened(true)} />
            </NavigationItem>
            <NavigationItem>
              <ActionButton text="Cadastrar" onClick={() => setIsSignUpDialogOpened(true)} />
            </NavigationItem>
          </div>
          <div className="block md:hidden">
            <NavigationItem>
              <DrawerButton onClick={() => setIsDrawerOpened(!isDrawerOpened)} />
            </NavigationItem>
          </div>
        </>
      </RightSideItems>
      {isLoginDialogOpened && <LoginDialog onClose={() => setIsLoginDialogOpened(false)} />}
      {isSignUpDialogOpened && <SignUpDialog onClose={() => setIsSignUpDialogOpened(false)} />}
    </nav>
  );
}
