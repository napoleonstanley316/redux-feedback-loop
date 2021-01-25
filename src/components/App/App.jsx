import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Today from "../Today/Today.jsx";
import Content from "../Content/Content.jsx";
import Supported from "../Supported/Supported.jsx";
import Comments from "../Comments/Comments.jsx";
import Review from "../Review/Review.jsx";
import Finished from "../Finished/Finished.jsx";
import NumericInput from "react-numeric-input";

function App() {
  const dispatch = useDispatch();

  // GET feedback on page load
  useEffect(() => {
    getFeedback();
  }, []);
  // GET route
  const getFeedback = () => {
    axios
      .get("/feedback")
      .then((response) => {
        // returned data
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
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
      <Route path="/" exact>
         <Home />
       </Route>
       <Route path="/today" exact>
         <Today />
       </Route>
       <Route path="/content">
         <Content />
       </Route>
       <Route path="/supported">
         <Supported />
       </Route>
       <Route path="/comments">
         <Comments />
       </Route>
       <Route path="/review">
         <Review />
       </Route>
       <Route path="/finished">
         <Finished />
       </Route>
    </Router>
    </div>
  );
}

export default App;
