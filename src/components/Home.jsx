import React, { useEffect, useState } from 'react';
import Navbar from './Share/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    let [darkMode,setDarkmode] = useState(false)

 useEffect(() =>{
  if(darkMode){
    document.documentElement.classList.add('dark')
  } else{
    document.documentElement.classList.remove('dark')
  }
 },[darkMode])
    return (
        <div className='px-10'>
            <Navbar darkMode={darkMode} setDarkmode={setDarkmode}></Navbar>
            <Outlet darkMode={darkMode}></Outlet>
           
        </div>
    );
};

export default Home;