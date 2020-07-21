import { all } from "redux-saga/effects";
import urlSaga from "./urlSaga";

export default function* rootSaga() {
  yield all([urlSaga()]);
}
