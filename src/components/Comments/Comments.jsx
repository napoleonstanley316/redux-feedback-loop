import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
  const comments = useSelector((store) => store.comments);

  const handleNext = () => {
    event.preventDefault();
    console.log("handleNext clicked in /Comments");
    <Finished />;
  };

  return (
    <form>
      <h3>Are there any other comments you would like to add?</h3>
      <input type="text"></input>
      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Comments;
