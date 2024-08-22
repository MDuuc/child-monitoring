import React from 'react';
import logo from './logo.svg';
import NavBar from './layouts/header-footer/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

      <div className='bg-[#e0d9d9] h-screen w-full'>
        <BrowserRouter>
          <Routes> 
            <Route path='/' element={<NavBar/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
