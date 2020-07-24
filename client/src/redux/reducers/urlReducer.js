import * as types from "../constants";
import produce from "immer";
import {
  requestPending,
  requestFail,
  API_FAIL,
  API_PENDING,
  requestSuccess,
  API_SUCCESS,
} from "../api/request";
import { setCookie } from "utils/cookie";

const initialState = {
  orgUrl: "",
  urlMap: {},
  isDesktop: false,
  errors: [],
  apiState: "initialized",
};

const urlManageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.STORE_URL_MATCH:
        draft.urlMap = action.payload.urlMap;
        draft.orgUrl = action.payload.orgUrl;
        break;
      case types.SET_SCREEN:
        draft.isDesktop = action.isDesktop;
        break;
      case requestPending(types.STORE_URL_MATCH):
        draft.apiState = API_PENDING;
        break;
      case requestSuccess(types.STORE_URL_MATCH):
        draft.apiState = API_SUCCESS;
        if (action.payload && action.payload.long_url && action.payload.alias)
          setCookie(
            "urlMap",
            JSON.stringify({
              long_url: action.payload.long_url,
              alias: action.payload.alias,
            })
          );
        break;
      case requestFail(types.STORE_URL_MATCH):
        draft.apiState = API_FAIL;
        draft.errors =
          action.payload && action.payload.errors ? action.payload.errors : [];
        break;
      default:
        break;
    }
  });

export default urlManageReducer;
