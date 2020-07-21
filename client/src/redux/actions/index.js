import * as types from "../constants";
import { createActions } from "redux-actions";

export function storeUrlMatch({ longUrl, shortUrl }) {
  return {
    type: types.STORE_URL_MATCH,
    longUrl,
    shortUrl,
  };
}

export function detectScreen() {
  return {
    type: types.DETECT_SCREEN,
  };
}

export function setScreen(isDesktop) {
  return {
    type: types.SET_SCREEN,
    isDesktop,
  };
}
