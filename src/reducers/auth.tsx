import * as ActionTypes from "../actions/ActionTypes";

interface AuthState {
  login: boolean;
  data: any | null;
}

interface AuthAction {
  type: string;
  data?: any;
}

const initialState: AuthState = {
  login: false,
  data: null,
};

export default function auth(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case ActionTypes.Login:
      return {
        ...state,
        data: action.data?.data ?? null,
        login: action.data?.data != null,
      };
    case ActionTypes.Logout:
      return {
        login: false,
        data: null,
      };
    default:
      return state;
  }
}
