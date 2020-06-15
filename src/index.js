import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";
import "semantic-ui-css/semantic.css";

const store = configureStore();

const rootEl = document.getElementById("root");

const render = () => {
  const App = require("./app").default;
  ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
    // </React.StrictMode>,
    rootEl
  );
};

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./app", () => {
      setTimeout(render);
    });
  }
}

render();
