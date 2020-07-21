import { combineReducers } from "redux";
import urlReducer from "./urlReducer";

const rootReducer = combineReducers({
  urlState: urlReducer,
});

export default rootReducer;
