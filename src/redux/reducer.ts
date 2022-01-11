import { combineReducers } from "redux";
import feedBackReducer from "./feedBack/feedBackReducer";
import featureReducer from './features/featureRedecer'

const rootReducer = combineReducers({ feedBackReducer, featureReducer });

export default rootReducer;
