import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/root-reducer.js";
import thunk from "redux-thunk";

export default (preloadedState) => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancer = [middlewareEnhancer];
  const composedEnhancer = compose(...storeEnhancer);
  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers/root-reducer", () => {
        const newRootReducer = require("../reducers/root-reducer");
        store.replaceReducer(newRootReducer);
      });
    }
  }

  return store;
};
