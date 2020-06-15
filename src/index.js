import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configure-store";

const store = configureStore();

const rootEl = document.getElementById("root");

const render = () => {
  const App = require("./App").default;
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootEl
  );
};

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./App", () => {
      setTimeout(render);
    });
  }
}

render();
