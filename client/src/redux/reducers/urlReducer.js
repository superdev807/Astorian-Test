import * as types from "../constants";
import { handleActions } from "redux-actions";
import { requestSuccess, requestPending, requestFail } from "../api/request";

const initialState = {
  orgUrl: "",
  urlMap: {},
};

const urlManageReducer = handleActions({
  [requestSuccess(types.STORE_URL_MATCH)]: (state, { payload }) => {
    return {
      ...state,
    };
  },
});

export default urlManageReducer;
