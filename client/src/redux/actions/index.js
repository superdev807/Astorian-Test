import * as types from "../constants";

export function storeUrlMatch({ data }) {
  return {
    type: types.STORE_URL_MATCH,
    payload: {
      data: data,
    },
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
