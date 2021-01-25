import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
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
import Finished from "../Finished/Finished.jsx";

function Comments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [comments, setComments] = useState("1");

  const handleNext = () => {
    console.log(comments);
    // move to /review page
    history.push("/review");

    console.log("handleNext clicked in /comments");

    const action = {
      type: "SET_COMMENTS",
      payload: comments,
    };
    dispatch(action);
  };

  return (
    <form>
      <h3>Are there any other comments you would like to add?</h3>
      <input
        type="text"
        onChange={(event) => setComments(event.target.value)}
      ></input>
      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Comments;
