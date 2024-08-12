import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing.jsx";
import axios from "axios";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Plantation } from "./pages/Plantation.jsx";

function App() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.org/users").then((res) => {
      console.log("resposne is : ", res);
    });
  });
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/plantation" element={<Plantation />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
