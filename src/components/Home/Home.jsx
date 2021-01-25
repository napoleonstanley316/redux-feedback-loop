import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Today from "../Today/Today.jsx";

function Home() {
  const [feeling, setFeeling] = useState("1");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleNext = () => {
    console.log(feeling);
    history.push("/today");
    // event.preventDefault();
    console.log("handleNext clicked in /Home");
    // <Today/>;
    const action = {
      type: "SET_FEELING",
      payload: feeling,
    };
    dispatch(action);
  };

  return (
    <form>
      <h3>Click 'Next' to start your feedback</h3>
      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Home;
