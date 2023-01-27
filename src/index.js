import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App.jsx";
import store from "./components/store.jsx";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


