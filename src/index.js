import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./routes/App";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ProspectsReducers from "./reducers/ProspectsReducers";

const store = createStore(ProspectsReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
