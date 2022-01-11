import { createStore } from "redux";
import rootReducer from "./reducer";
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;


export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
