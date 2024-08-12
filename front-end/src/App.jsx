import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing/Landing.jsx";

function App() {
  return (
    <div>
      <Nav />
      <Landing />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
