import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
const Navbar = ({darkMode,setDarkmode}) => {
 

    return (
        <div className='dark: bg-black'>
        
        <div className="dark:text-white navbar bg-[#f5f8fa] dark:bg-black mt-10">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">CarRent</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <CiHeart className='text-cyan-500 text-4xl'></CiHeart>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
     
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    
   
{/* 
<button onClick={() => setDarkmode(!darkMode)} className='btn btn-primary'>
 {darkMode? 'light':"dark" } mode
</button> */}

<div className=''>
<input onClick={() => setDarkmode(!darkMode)} type="checkbox" className="toggle" checked={darkMode}  />
</div>

    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/LknGrLR/author2.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;