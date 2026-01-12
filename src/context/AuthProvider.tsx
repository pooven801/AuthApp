import React, { ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';
import { User, UserData, LoginResult, SignupResult } from './types';
import { useDispatch } from "react-redux";
import { loginAction, logoutAction, } from "../actions/AuthActions";


interface Props {
  children: ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData[]>([]);
  const dispatch = useDispatch();

  const login = (email: string, password: string): LoginResult => {
    const existingUser = userData?.find(u => u.email === email);

    if (!existingUser) {
      return {
        success: false,
        message: 'User does not exist',
      };
    }

    if (existingUser.password !== password) {
      return {
        success: false,
        message: 'Invalid password',
      };
    }

    const loggedInUser: User = {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
    };
    dispatch(loginAction(loggedInUser) as any);
    setUser(loggedInUser);
    return {
      success: true,
      message: 'Login successful',
    };
  };

  const signup = (name: string, email: string, password: string): SignupResult => {
    const newUser: UserData = {
      id: Date.now(),
      name,
      email,
      password
    };

    setUserData([...userData, newUser]);
    return {
      success: true,
      message: 'Sign Up successful',
    };
  };

  const logout = () => {
    dispatch(logoutAction() as any);
    setUser(null);
    return {
      success: true,
      message: 'Logged Out',
    };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
