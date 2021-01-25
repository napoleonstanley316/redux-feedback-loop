import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";



const newFeedback = {
 
    feeling: '1',
    understanding: '1',
    support: '1',
    comments: '',
  }

const feedback = (state = newFeedback, action) => {

  switch (action.type) {
    case 'SET_FEELING':
      return {...state, feeling: action.payload };
      case 'SET_CONTENT':
        return {...state, content: action.payload};
        case 'SET_SUPPORT':
          return {...state, support: action.payload};
          case 'SET_COMMENTS':
            return {...state, comments: action.payload};
      case 'NEW_FEEDBACK':
        return newFeedback
    default:
      return state;
}
}


const reduxStore = createStore(
  combineReducers({
    feedback,
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
