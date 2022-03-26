import { applyMiddleware, createStore, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [thunk];
const windowObj: any = window;

const composeMiddleware = applyMiddleware(...middlewares);
// const composeMiddleware =
//   process.env.NODE_ENV === "development"
//     ? compose(
//         applyMiddleware(...middlewares),
//         windowObj.__REDUX_DEVTOOLS_EXTENSION__ &&
//           windowObj.__REDUX_DEVTOOLS_EXTENSION__()
//       )
//     : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeMiddleware);
export const persistor = persistStore(store);

export default store;
