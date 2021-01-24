import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Today from "../Today/Today.jsx";
import Content from "../Content/Content.jsx";
import Supported from "../Supported/Supported.jsx";
import Comments from "../Comments/Comments.jsx";
import NumericInput from "react-numeric-input";

function App() {
  const dispatch = useDispatch();

  // TODO - GET feedback from server
  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        // do stuff with data! response.data
        const action = {
          type: "SET_NEW_FEEDBACK",
          payload: response.data,
        };
        dispatch(action);
      })
      .catch((err) => {
        alert("error in GET feedback");
        console.error(err);
      });
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Link to="/today">
          <button type="button">BEGIN FEEDBACK</button>
        </Link>
        <Route path="/today" component={Today} />
      </div>
    </Router>
  );
}

export default App;
