import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing/Landing.jsx";
import axios from "axios";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.org/users").then((res) => {
      console.log("resposne is : ", res);
    });
  });
  return (
    <div>
      <Nav />
      <Landing />
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
