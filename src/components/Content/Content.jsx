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
import Supported from "../Supported/Supported.jsx";
import Comments from "../Comments/Comments.jsx";

function Content() {
  event.preventDefault();
  const content = useSelector((store) => store.content);

  const handleNext = () => {
    console.log("handleNext clicked in /Content");
    <Supported />;
  };

  return (
    <form>
      <h3>How well did you understand today's material?</h3>
      <h5>Select One (1= Not at all : 3 = Very Well)</h5>
      <input type="number" min="1" max="3" step="1"></input>
      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Content;
