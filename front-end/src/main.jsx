import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import axios from "axios";

// Set up the Axios interceptor
axios.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage (or any other storage)
    const token = localStorage.getItem("idToken");
    console.log("token is : ", token);
    // If the token exists, add it to the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

createRoot(document.getElementById("root")).render(<App />);
