import * as ActionTypes from "./ActionTypes";
import { Dispatch } from "redux";

export interface User {
  email: string;
  name?: string;
}

export interface LoginResult {
  success: boolean;
}

interface AuthAction {
  type: string;
  data: any;
}

const onExecuted = (type: string, data: { success: boolean; data: User | null }): AuthAction => ({
  type,
  data,
});


export const loginAction =
  (userData: User) =>
    async (dispatch: Dispatch<AuthAction>): Promise<LoginResult> => {
      dispatch(onExecuted(ActionTypes.Login, { success: true, data: userData }));
      return { success: true };
    };

export const logoutAction = () => async (dispatch: Dispatch<AuthAction>): Promise<LoginResult> => {
  dispatch({ type: ActionTypes.Logout, data: null });
  return { success: true };
};