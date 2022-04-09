import {
  SET_LOGGED_IN,
  SET_SHOW_FILTER,
  SET_USER,
  SET_FILTERS,
} from "./../redux/types/index";
/* eslint-disable no-unused-vars */
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AxiosRequestConfig } from "axios";

import axios from "./axios";
import { ReducerRootState } from "../redux/types";
let GLOBAL_ID = 0;

/**
 * Allows you run event on initial mount
 * */
export const useInitialMount = () => {
  // refs exist across component re-renders, so
  // we can use it to store a value for the
  // subsequent renders. We're tracking if it's
  // the first render, which is initially `true`
  const isFirst = useRef(true);

  // the very first render, the ref will be
  // `true`. but we immediately set it to `false`
  // so that every render after will be `false`
  if (isFirst.current) {
    isFirst.current = false;

    // return true the very first render
    return true;
  }

  // return false every following render
  return false;
};

/**
 * Get previous value of props or state
 * */
export const usePrevious = <T>(value: T): T | undefined => {
  const prevRef = useRef<T>();
  const curRef = useRef(value);
  const isInitialMount = useInitialMount();

  if (!isInitialMount && curRef.current !== value) {
    prevRef.current = curRef.current;
    curRef.current = value;
  }

  return prevRef.current;
};

/**
 * Create a unique ID on initial render to use an id for DOM elements.
 * */
export const useUniqueId = () => {
  const idRef = useRef("");
  const isInitialMount = useInitialMount();

  // generate the ID for the first render
  // and store in the ref to remain for
  // subsequent renders
  if (isInitialMount) {
    GLOBAL_ID += 1;
    idRef.current = `id${GLOBAL_ID}`;
  }

  return idRef.current;
};

/**
 * Allow you track if the component is still mounted
 * */
export const useIsMounted = () => {
  // the ref to keep track of mounted state across renders
  const mountedRef = useRef(false);

  // helper function that will return the mounted state.
  // using `useCallback` because the function will likely
  // be used in the deps array of a `useEffect` call
  const isMounted = useCallback(() => mountedRef.current, []);

  // effect sets mounted ref to `true` when run
  // and the sets to `false` during effect cleanup (i.e. unmount)
  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
};

type ToggleState = (initialValue?: boolean) => [boolean, () => void];
/**
 * Allow you toggle a boolean value between true or false
 * @param {boolean} [initialValue]
 * */
export const useToggle: ToggleState = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, toggle];
};

type EventListenerState = (
  event: keyof HTMLElementEventMap,
  handler: EventListenerOrEventListenerObject,
  referencedElement: MutableRefObject<HTMLElement>
) => void;

export const useEventListener: EventListenerState = (
  event,
  handler,
  referencedElement
) => {
  // effect for binding event handler to the element
  useEffect(() => {
    const element = referencedElement?.current || window;

    const isSupported = element && element.addEventListener;

    if (!isSupported) return;

    // bind event to the element
    element.addEventListener(event, handler);

    return () => element.removeEventListener(event, handler);
  }, [referencedElement, event, handler]);
};

export type LocalStorageState = <T = unknown>(
  key: string,
  defaultValue?: unknown
) => [T, Dispatch<SetStateAction<T>>];

/**
 * Allow you change our UI based upon a host of media features (most commonly the size of the window)
 * @param {string} query css media query
 * */
export const useMedia = (query: string): boolean => {
  // initialize state to current match value
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isMounted()) {
      return;
    }

    const mediaQueryList = window.matchMedia(query);
    const listener = () => {
      // update `matches` state whenever query match changes.
      // `isMounted()` check is for extra protection in case
      // listener somehow fires in between unmount and
      // listener removal
      if (isMounted()) {
        setMatches(mediaQueryList.matches);
      }
    };

    mediaQueryList.addListener(listener);

    // sync initial matches again
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, [query, isMounted]);

  return matches;
};

export type AxiosState = (params: AxiosRequestConfig) => {
  loading: boolean;
  error: unknown;
  response: unknown;
};

/**
 * Allow you make axios request
 * @param {object} params axios request configuration
 * @returns {object} an object of loading state, error, and response data
 * */
export const useAxios: AxiosState = (params) => {
  const [response, setResponse] = useState<unknown>(undefined);
  const [error, setError] = useState<unknown>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (config: AxiosRequestConfig) => {
    try {
      const result = await axios.request(config);
      setResponse(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(params);
  }, []);

  return { loading, error, response };
};

type DispatchFilterPanel = (payload: boolean) => void;
export type FilterPanelState = () => [boolean, DispatchFilterPanel];

/**
 * Allow you have access to the show filter reducer in redux store
 * @returns {object} an object of redux show filter state and function to dispatch show filter payload to redux
 * */
export const useFilterPanel: FilterPanelState = () => {
  const dispatch = useDispatch();
  const filterPanel = useSelector<ReducerRootState, boolean>(
    (state) => state.ui.showFilter
  );

  const setFilterPanel: DispatchFilterPanel = useCallback(
    (payload) => {
      dispatch({ type: SET_SHOW_FILTER, payload });
    },
    [dispatch]
  );

  return [filterPanel, setFilterPanel];
};

type DispatchFilters = (payload: any) => void;
export type FiltersState = () => [any, DispatchFilters];

/**
 * Allow you have access to the filters reducer in redux store
 * @returns {object} an object of redux filters state and function to dispatch filters payload to redux
 * */
export const useFilters: FiltersState = () => {
  const dispatch = useDispatch();
  const filter = useSelector<ReducerRootState, boolean>(
    (state) => state.ui.filters
  );

  const setFilter: DispatchFilterPanel = useCallback(
    (payload) => {
      dispatch({ type: SET_FILTERS, payload });
    },
    [dispatch]
  );

  return [filter, setFilter];
};

type DispatchLoggedIn = (payload: boolean) => void;
export type LoggedInState = () => [boolean, DispatchLoggedIn];

/**
 * Allow you have access to the user logged in reducer in redux store
 * @returns {object} an object of redux user logged in state and function to dispatch user logged in payload to redux
 * */
export const useIsLoggedIn: LoggedInState = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector<ReducerRootState, boolean>(
    (state) => state.auth.isLoggedIn
  );

  const setLoggedIn: DispatchLoggedIn = useCallback(
    (payload) => {
      dispatch({ type: SET_LOGGED_IN, payload });
    },
    [dispatch]
  );

  return [loggedIn, setLoggedIn];
};

type DispatchUser = (payload: any) => void;
export type UserState = () => [any, DispatchUser];

/**
 * Allow you have access to the user reducer in redux store
 * @returns {object} an object of redux user state and function to dispatch user payload to redux
 * */
export const useUser: UserState = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector<ReducerRootState, boolean>(
    (state) => state.user.user
  );

  const setLoggedIn: DispatchUser = useCallback(
    (payload) => {
      dispatch({ type: SET_USER, payload });
    },
    [dispatch]
  );

  return [loggedIn, setLoggedIn];
};

const hooks = {
  useMedia,
  usePrevious,
  useUniqueId,
  useInitialMount,
  useIsMounted,
  useToggle,
  useAxios,
  useEventListener,
  useFilterPanel,
  useIsLoggedIn,
  useUser,
};

export default hooks;
