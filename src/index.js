import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

const feedback = (state = [], action) => {};

const newFeedback = (
  state = {
    feeling: "",
    understanding: "",
    support: "",
    comments: "",
    flagged: "",
    date: "",
  },
  action
) => {
  switch (action.type) {
    case "SET_NEW_FEEDBACK":
      return action.payload;
    default:
      return state;
  }
};

const reduxStore = createStore(
  combineReducers({
    newFeedback,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
