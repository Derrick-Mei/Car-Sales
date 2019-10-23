import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

import { createStore } from "redux";
import { reducer } from "./reducers";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
