import { createSelector } from "reselect";
import { API_PENDING, API_SUCCESS, API_FAIL } from "../api/request";

export const selectedState = (state) => state.urlState;

export const makeSelectIsDesktop = createSelector(
  selectedState,
  (state) => state.isDesktop
);
