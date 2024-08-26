import React from 'react';
import logo from './logo.svg';
import NavBar from './layouts/header-footer/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './layouts/signIn-signUP/SignIn';
import SignUp from './layouts/signIn-signUP/SignUp';
import Footer from './layouts/header-footer/Footer';
import Homepage from './layouts/homepage/Homepage';

function App() {
  return (

      <div>
        <BrowserRouter>
        <NavBar/>
          <Routes> 
            <Route path="/" element={<Homepage/>}></Route>
            <Route path='/sign-in' element={<SignIn/>}></Route>
            <Route path='/sign-up' element={<SignUp/>}></Route>
          </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
