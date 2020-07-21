import {
  cancel,
  cancelled,
  call,
  select,
  take,
  takeLatest,
  put,
  fork,
} from "redux-saga/effects";

import { STORE_URL_MATCH, GET_URL_MATCH_LIST } from "../constants";
import apiCall from "../api/call";

export const getUrlMapList = apiCall({
  type: GET_URL_MATCH_LIST,
  method: "get",
  baseURL: process.env.URL_MANAGE_HOST,
  path: () => "urls",
  payloadOnSuccess: ({ data }) => data,
});

export const storeUrlMatch = apiCall({
  type: STORE_URL_MATCH,
  method: "post",
  baseURL: process.env.URL_MANAGE_HOST,
  path: () => "store",
  payloadOnSuccess: ({ data }) => data,
});

export default function* rootSaga() {
  yield takeLatest(GET_URL_MATCH_LIST, getUrlMapList);
  yield takeLatest(STORE_URL_MATCH, storeUrlMatch);
}
