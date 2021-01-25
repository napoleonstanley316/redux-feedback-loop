import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import Today from '../Today/Today.jsx'
import Review from '../Review/Review.jsx';

function Finished() {
 const history = useHistory
const dispatch = useDispatch

  const handleNext = () => {
    dispatch({type: 'NEW_FEEDBACK'});
    history.push('/');
  }



  return (
    <form>
      <h3>Success!</h3>
      <h3>Thanks for your feedback!</h3>

      <button onClick={handleNext}>Return Home</button>
    </form>
  );
}

export default Finished;
