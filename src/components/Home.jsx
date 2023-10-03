import React from 'react';
import Navbar from './Share/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='px-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Home;