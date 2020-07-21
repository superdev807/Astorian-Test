import * as types from "../constants";
import produce from "immer";
import { requestSuccess, requestPending, requestFail } from "../api/request";

const initialState = {
  orgUrl: "",
  urlMap: {},
  isDesktop: false,
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
      default:
        break;
    }
  });

export default urlManageReducer;
