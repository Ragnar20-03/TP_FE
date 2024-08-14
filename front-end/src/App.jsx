import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing.jsx";
import axios from "axios";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Plantation from "./pages/Plantation.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PlantTree from "./pages/PlantTree.jsx";

function App() {
  useEffect(() => {
    axios
      .get("https://tree-plantation-delta.vercel.app/user/getUser")
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div className="flex flex-col">
      <div>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/plantation" element={<Plantation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plant-tree" element={<PlantTree />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
