import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { UsersContext } from '../contexts/users.context';
import User from '../models/user.model';
import ActionButton from './buttons/action.button';
import DrawerButton from './buttons/drawer.button';
import { Span } from './common/span';
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
  const { isAuthenticated, signOut } = useContext(AuthContext);
  const { getData } = useContext(UsersContext);
  const [user, setUser] = useState<User>();
  const [isLoginDialogOpened, setIsLoginDialogOpened] = useState(false);
  const [isSignUpDialogOpened, setIsSignUpDialogOpened] = useState(false);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  async function getUser() {
    const user = await getData();
    if (user) setUser(user);
  }

  async function logout() {
    const success = await signOut();
  }

  useEffect(() => {
    if (isAuthenticated) getUser();
    else setUser(undefined);
  }, [isAuthenticated]);

  return (
    <nav
      className={`flex flex-row justify-between items-center w-full p-2 bg-gm-dark-pink dark:bg-gm-dark-purple`}>
      <LeftSideItems>
        <NavigationItem>
          <Logo />
        </NavigationItem>
      </LeftSideItems>
      <RightSideItems>
        <NavigationItem>
          <DarkModeSwitch />
        </NavigationItem>
        {!user && (
          <div className="flex flex-row gap-4">
            <NavigationItem>
              <ActionButton text="Entrar" onClick={() => setIsLoginDialogOpened(true)} />
            </NavigationItem>
            <NavigationItem>
              <ActionButton text="Cadastrar" onClick={() => setIsSignUpDialogOpened(true)} />
            </NavigationItem>
          </div>
        )}
        {user && (
          <div className="flex flex-row gap-4">
            <NavigationItem>
              <Span className="px-1 py-0.5 text-white text-md font-semibold tracking-wider text-center">
                {user.name}
              </Span>
            </NavigationItem>
            <NavigationItem>
              <ActionButton text="Sair" onClick={logout} />
            </NavigationItem>
          </div>
        )}
      </RightSideItems>
      {isLoginDialogOpened && <LoginDialog onClose={() => setIsLoginDialogOpened(false)} />}
      {isSignUpDialogOpened && <SignUpDialog onClose={() => setIsSignUpDialogOpened(false)} />}
    </nav>
  );
}
