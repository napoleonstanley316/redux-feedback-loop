import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Comments from "../Comments/Comments.jsx";

function Supported() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [support, setSupport] = useState("1");

  const handleNext = () => {
    console.log(support);
    // move to /comments page
    history.push("/comments");

    console.log("handleNext clicked in /supported");

    const action = {
      type: "SET_SUPPORT",
      payload: support,
    };
    dispatch(action);
  };

  return (
    <>
      <h3>How well did you feel supported?</h3>
      <h5>Select One (1= Not at all : 3 = Very Well)</h5>
      <input
        type="number"
        min="1"
        max="3"
        step="1"
        onChange={(event) => setSupport(event.target.value)}>
      </input>
      <button onClick={handleNext}>NEXT</button>
    </>
  );
}

export default Supported;
