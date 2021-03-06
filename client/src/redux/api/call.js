import axios from "axios";
import { call, put } from "redux-saga/effects";

import { requestFail, requestPending, requestSuccess } from "./request";

const defaultHeaders = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

export default ({
  type,
  method, // one of 'get', 'post', 'put', 'delete'
  path,
  baseURL,
  params: sagaParams,
  headers,
  responseType,
  appToken,
  auth,
  stealthy,
  success, // Can be function generator to use yield
  fail, // Can be function generator to use yield
  payloadOnSuccess,
  payloadOnFail,
}) =>
  function* (action) {
    const payload = action.payload || {};
    const {
      data,
      params,
      headers: customHeaders,
      success: successCallback,
      fail: failCallback,
      onUploadProgress,
      onDownloadProgress,
      resolve,
      reject,
    } = payload;

    try {
      if (!stealthy) {
        yield put({
          type: requestPending(type),
        });
      }

      const finalHeaders = {
        ...defaultHeaders(),
        ...headers,
        ...(customHeaders ? customHeaders : {}),
      };

      const res = yield call(axios.request, {
        url: typeof path === "function" ? path(action) : path,
        method: method.toLowerCase(),
        headers: finalHeaders,
        data,
        params: { ...sagaParams, ...params },
        baseURL: baseURL || process.env.REACT_APP_URL_MANAGE_HOST,
        onUploadProgress,
        onDownloadProgress,
        responseType,
      });

      const payload = payloadOnSuccess
        ? payloadOnSuccess(res.data, action)
        : res.data;

      yield put({
        type: requestSuccess(type),
        payload,
      });

      if (resolve) {
        // Promise parameter
        yield resolve(payload);
      }

      if (success) {
        yield success(res, action);
      }

      successCallback && successCallback(payload);

      return true;
    } catch (err) {
      let errRes = err;
      if (err.response) {
        errRes = err.response;
      }

      const payload = payloadOnFail ? payloadOnFail(errRes, action) : errRes;
      if (!stealthy) {
        yield put({
          type: requestFail(type),
          payload,
          error: true,
        });
      }

      if (reject) {
        // Promise parameter
        yield reject(payload);
      }

      if (fail) {
        yield fail(errRes);
      }

      failCallback && failCallback(errRes);

      return false;
    }
  };
