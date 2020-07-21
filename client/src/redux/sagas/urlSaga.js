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

import {
  STORE_URL_MATCH,
  GET_URL_MATCH_LIST,
  DETECT_SCREEN,
} from "../constants";
import apiCall from "../api/call";
import { BREAKPOINTS } from "utils/constants";
import { setScreen } from "../actions";

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

export function* setDeviceScreen() {
  const windowWidth = window.innerWidth;
  const isDesktop = windowWidth >= BREAKPOINTS.SM;
  yield put(setScreen(isDesktop));
}

export default function* rootSaga() {
  yield takeLatest(GET_URL_MATCH_LIST, getUrlMapList);
  yield takeLatest(STORE_URL_MATCH, storeUrlMatch);
  yield takeLatest(DETECT_SCREEN, setDeviceScreen);
}
