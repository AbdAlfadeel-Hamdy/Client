import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducers from "./reducers";
import App from "./components/App";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
