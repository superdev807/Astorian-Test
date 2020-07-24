import { takeLatest, put } from "redux-saga/effects";

import { STORE_URL_MATCH, DETECT_SCREEN } from "../constants";
import apiCall from "../api/call";
import { BREAKPOINTS } from "utils/constants";
import { setScreen } from "../actions";

export const storeUrlMatch = apiCall({
  type: STORE_URL_MATCH,
  method: "post",
  path: () => "store",
  payloadOnSuccess: (data) => data,
  payloadOnFail: ({ data }) => data,
});

export function* setDeviceScreen() {
  const windowWidth = window.innerWidth;
  const isDesktop = windowWidth >= BREAKPOINTS.SM;
  yield put(setScreen(isDesktop));
}

export default function* rootSaga() {
  yield takeLatest(STORE_URL_MATCH, storeUrlMatch);
  yield takeLatest(DETECT_SCREEN, setDeviceScreen);
}
