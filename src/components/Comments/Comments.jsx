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
import Finished from "../Finished/Finished.jsx";

function Content() {

  const content = useSelector((store) => store.content);

  const handleNext = () => {
    console.log("handleNext clicked in /Content");
    <Supported />;
  };

  return (
    <form>
      <h3>Are there any other comments you would like to add?</h3>
      <input type="text"></input>
      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Content;
