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



function Home () {

    const handleNext = () => {
      event.preventDefault();
        console.log("handleNext clicked in /Home");
        <Today/>;
      };
    
      return (
        <form>
          <h3>Click 'Next' to start your feedback</h3>
          <button onClick={handleNext}>NEXT</button>
        </form>
      );
    }

export default Home;