import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      FrontEnd
      <BrowserRouter>
        <Routes>
          {/* Login route with nested route */}
          <Route path='/login' element={<Login />}>
            {/* Nested route */}
            <Route path='user' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <Route path='/signup' element={<Signup />} /> */}
{/* <Route path='/login' element={<Login />} />  */}