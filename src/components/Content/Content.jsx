import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {useState} from 'react';
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
  const history = useHistory();
  const dispatch = useDispatch();
    const [content, setContent] = useState('1');
 
      const handleNext = () => {
        console.log(content);
        history.push('/supported')
        // event.preventDefault();
          console.log("handleNext clicked in /content");
          // <Today/>;
          const action = {
            type: 'SET_CONTENT',
            payload: content
          }
          dispatch(action)
        }

  return (
    <form>
      <h3>How well did you understand today's material?</h3>
      <h5>Select One (1= Not at all : 3 = Very Well)</h5>
      <input type="number" min="1" max="3" step="1"
      onChange={(event) => setContent(event.target.value)}>
      </input>
      <button onClick={handleNext}>NEXT</button>
    </form>
  );
}

export default Content;
