import { useSelector } from "react-redux";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Content from "../Content/Content.jsx";
import Supported from "../Supported/Supported.jsx";
import Comments from "../Comments/Comments.jsx";

function Today() {
  const feeling = useSelector((store) => store.feeling);
  const handleNext = () => {
    
    console.log("handleNext in /today clicked");
    <Content />;
  };

  return (
    <form>
      <h3>How are you feeling today?</h3>
      <h5>Select One (1= Very Unsatisfied : 5 = Very Satisfied)</h5>
      <input type="number" min="1" max="5" step="1"></input>
      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Today;
