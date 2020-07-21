import * as types from "../constants";
import { createActions } from "redux-actions";

export const { storeUrlMatch } = createActions({
  [types.STORE_URL_MATCH]: ({ longUrl, shortUrl }) => ({ longUrl, shortUrl }),
});
