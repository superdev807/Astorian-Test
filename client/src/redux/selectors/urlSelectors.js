import { createSelector } from "reselect";
import { API_PENDING, API_SUCCESS, API_FAIL } from "../api/request";

export const selectGlobal = (state) => state.urlState;
