import React from 'react';

import './App.css';
import Header from "./conponents/Header/Header";
import Navigation from "./conponents/Navigation/Navigation";
import Profile from "./conponents/Profile/Profile";

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
