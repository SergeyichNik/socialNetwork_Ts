import React from 'react';

import './App.css';
import Header from "./conponents/Header";
import Navigation from "./conponents/Navigation";
import Profile from "./conponents/Profile";

function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <Profile/>
    </div>
  );
}





export default App;
