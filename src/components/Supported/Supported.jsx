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
import Comments from "../Comments/Comments.jsx";

function Supported() {
  event.preventDefault();
  const support = useSelector((store) => store.support);

  const handleNext = () => {
    console.log("handleNext clicked in /supported");
    <Comments />;
  };

  return (
    <form>
      <h3>How well did you feel supported?</h3>
      <h5>Select One (1= Not at all : 3 = Very Well)</h5>
      <input type="number" min="1" max="3" step="1"></input>
      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Supported;
