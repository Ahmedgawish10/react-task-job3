import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux-store/store"
import {BrowserRouter } from "react-router-dom"
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
      <BrowserRouter >

    <Provider store={store}>
      <Toaster position="top-right"/>

      <App />
    </Provider>
    </BrowserRouter >

  </>
);
