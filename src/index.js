import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";
import App from "./components/App";
const store = createStore(reducers);
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
