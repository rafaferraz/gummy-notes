import { createContext, ReactNode } from 'react';
import DependenciesContainer from '../dependencies.container';
import User from '../models/user.model';

type UsersContextData = {
  signUp: (credentials: { email: string; password: string }) => Promise<User | undefined>;
  getData: () => Promise<User | undefined>;
};

type UsersProviderProps = {
  children: ReactNode;
};

export const UsersContext = createContext<UsersContextData>({
  signUp: async () => undefined,
  getData: async () => undefined
});

export default function UsersProvider({ children }: UsersProviderProps) {
  const usersRepository = DependenciesContainer.instance.usersRepository;

  async function signUp({ email, password }: { email: string; password: string }) {
    const result = await usersRepository.create({
      email: email,
      password: password
    });
    return result;
  }

  async function getData() {
    const result = await usersRepository.findOne();
    return result;
  }

  return <UsersContext.Provider value={{ signUp, getData }}>{children}</UsersContext.Provider>;
}
