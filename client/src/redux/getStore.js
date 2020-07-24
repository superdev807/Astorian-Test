import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import rootSaga from "./sagas";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const getMiddleware = () => {
    return applyMiddleware(sagaMiddleware);
  };

  const store = createStore(reducers, initialState, getMiddleware());

  sagaMiddleware.run(rootSaga);

  return store;
}
