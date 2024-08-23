import React from 'react';
import logo from './logo.svg';
import NavBar from './layouts/header-footer/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './layouts/header-footer/signIn-signUP/SignIn';
import SignUp from './layouts/header-footer/signIn-signUP/SignUp';

function App() {
  return (

      <div className='bg-[#e0d9d9] h-screen w-full'>
        <BrowserRouter>
        <NavBar/>
          <Routes> 
            <Route path='/sign-in' element={<SignIn/>}></Route>
            <Route path='/sign-up' element={<SignUp/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
