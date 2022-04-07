import ActionTypes, {
  SET_SHOW_FILTER,
  SET_LOADING,
  SET_LOGGED_IN,
  SET_FILTERS,
} from "../types";

export type UIReducerStateProps = {
  loading: boolean;
  loggedIn: boolean;
  showFilter: boolean;
  filters: any;
};

const initialState: UIReducerStateProps = {
  loading: false,
  loggedIn: false,
  showFilter: false,
  filters: {},
};

export type ActionType = {
  readonly type: typeof SET_LOADING | typeof SET_SHOW_FILTER;
  readonly payload: any;
};

const uiReducer: any = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_SHOW_FILTER:
      return {
        ...state,
        showFilter: payload,
      };
    case SET_FILTERS:
      return {
        ...state,
        filters: payload,
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
