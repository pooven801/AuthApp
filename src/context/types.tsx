export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string
}

export type LoginResult = {
  success: boolean;
  message: string;
};

export type SignupResult = {
  success: boolean;
  message: string;
};