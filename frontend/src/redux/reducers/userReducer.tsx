import { SET_USER } from "../types";

export type userReducerStateProps = {
  user: any;
};

const initialState: userReducerStateProps = {
  user: {},
};

export type ActionType = {
  readonly type: typeof SET_USER;
  readonly payload: any;
};

const userReducer: any = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
