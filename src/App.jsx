import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Body from './Body';
import Login from './Login';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Body/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
        </Route>
      </Routes>

    </BrowserRouter>

  )
}

export default App;
