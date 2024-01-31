import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataLayer } from "./DataLayer";
import reducer, { intialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataLayer initialState={intialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>
);
