import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware: any[] = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware, thunk))
);

export default store;

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
