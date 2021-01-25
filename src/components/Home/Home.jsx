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
  const history = useHistory();

  const handleNext = () => {
    // move to /today page
    history.push("/today");

    console.log("handleNext clicked in /Home");
  };

  return (
    <form>
      <h3>Welcome!</h3>
      <h4>Click 'Next' to start your feedback</h4>
      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Home;
