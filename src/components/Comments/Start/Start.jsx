import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Router } from "express";
import { useSelector } from "react-redux";
import Today from "../../Today/Today";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Today from "../Today/Today.jsx";



function Start() {
  return (
  <Today />
  );
}

export default Start;
