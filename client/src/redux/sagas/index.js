import { all } from "redux-saga/effects";
import * as urlSaga from "./urlSaga";

export default function* rootSaga() {
  yield all([urlSaga()]);
}
