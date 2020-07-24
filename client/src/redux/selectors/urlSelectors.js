import { createSelector } from "reselect";

export const selectedState = (state) => state.urlState;

export const makeSelectIsDesktop = createSelector(
  selectedState,
  (state) => state.isDesktop
);

export const makeSelectErrors = createSelector(
  selectedState,
  (state) => state.errors
);

export const makeSelectAPIState = createSelector(
  selectedState,
  (state) => state.apiState
);
