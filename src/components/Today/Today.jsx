
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {useState} from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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


  
  
   const history = useHistory();
  const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('1');
 
      const handleNext = () => {
        console.log(feeling);
        history.push('/content')
        // event.preventDefault();
          console.log("handleNext clicked in /Home");
          // <Today/>;
          const action = {
            type: 'SET_FEELING',
            payload: feeling
          }
          dispatch(action)
        }

  return (
    <>
      <h3>How are you feeling today?</h3>
      <h5>Select One (1= Very Unsatisfied : 5 = Very Satisfied)</h5>
      <input type="number" min="1" max="5" step="1"
      onChange={(event) => setFeeling(event.target.value)}></input>
      <button onClick={handleNext}>NEXT</button>
    </>
  );
}

export default Today;
