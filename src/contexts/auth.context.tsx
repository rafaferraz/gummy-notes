import { createContext, ReactNode, useState } from 'react';
import DependenciesContainer from '../dependencies.container';

type AuthContextData = {
  isAlreadyAuthenticated: () => Promise<boolean>;
  auth: ({ email, password }: { email: string; password: string }) => Promise<boolean>;
  signOut: () => Promise<boolean>;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>({
  isAlreadyAuthenticated: async () => false,
  auth: async () => false,
  signOut: async () => false,
  isAuthenticated: false
});

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authRepository = DependenciesContainer.instance.authRepository;

  async function isAlreadyAuthenticated() {
    const token = await authRepository.readToken();
    if (!token) {
      setIsAuthenticated(false);
      return false;
    }
    if (token.isValid) {
      setIsAuthenticated(true);
      return true;
    }
    const refreshedToken = await refreshAuth();
    if (refreshedToken?.isValid) setIsAuthenticated(true);
    return refreshedToken?.isValid || false;
  }

  async function signOut() {
    const isTokenOutOfStorage = await authRepository.logout();
    setIsAuthenticated(!isTokenOutOfStorage);
    return isTokenOutOfStorage;
  }

  async function auth({ email, password }: { email: string; password: string }) {
    const authenticated = await authRepository.login({ email, password });
    setIsAuthenticated(authenticated);
    return authenticated;
  }

  async function refreshAuth() {
    return await authRepository.refreshToken();
  }

  return (
    <AuthContext.Provider value={{ isAlreadyAuthenticated, auth, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
