import { createContext } from 'react';
import { User, LoginResult, SignupResult } from './types';

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => LoginResult;
  signup: (name: string, email: string, password: string) => SignupResult;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: (_email: string, _password: string) => ({
    success: false,
    message: 'Login not implemented',
  }),
  signup:  (_name: string, _email: string, _password: string) => ({
    success: false,
    message: 'Signup not implemented',
  }),
  logout: () => {},
});
