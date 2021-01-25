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
import Today from '../Today/Today.jsx'

function Finished() {
  event.preventDefault();

  const handleNext = () => {
    console.log("handleNext clicked in /finished");
    <Today />
  };
  return (
    <form>
      <h3>Success!</h3>

      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Finished;
