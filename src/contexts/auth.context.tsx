import { createContext, ReactNode } from 'react';
import DependenciesContainer from '../dependencies.container';

type AuthContextData = {
  isAlreadyAuthenticated: () => Promise<boolean>;
  auth: ({ email, password }: { email: string; password: string }) => Promise<boolean>;
  signOut: () => Promise<boolean>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>({
  isAlreadyAuthenticated: async () => false,
  auth: async () => false,
  signOut: async () => false
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const authRepository = DependenciesContainer.instance.authRepository;

  async function isAlreadyAuthenticated() {
    const token = await authRepository.readToken();
    if (!token) return false;
    if (token.isValid) return true;
    const refreshedToken = await refreshAuth();
    return refreshedToken?.isValid || false;
  }

  async function signOut() {
    return await authRepository.logout();
  }

  async function auth({ email, password }: { email: string; password: string }) {
    return await authRepository.login({ email, password });
  }

  async function refreshAuth() {
    return await authRepository.refreshToken();
  }

  return (
    <AuthContext.Provider value={{ isAlreadyAuthenticated, auth, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
