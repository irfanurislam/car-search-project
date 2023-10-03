import React from "react";
import { CiHeart } from "react-icons/ci";
import { FiCrosshair, FiUsers } from "react-icons/fi";
import { FaCog, FaGasPump } from 'react-icons/fa';

const Singlecar = ({car}) => {
    const {id,name,model,seats,fuelType,monthlyRentPrice,fuelEfficiencyMetric,transmission,year} = car
  return (
    <div>
      <div className="card min-h-full w-full bg-base-100 shadow-xl">
        <figure className="px-8 pt-8">
          <img
            src="https://i.ibb.co/wMb31LQ/pexels-s-von-hoerst-2676096.jpg"
            alt="Shoes"
            className="rounded-md "
          />
        </figure>
        <div className="card-body">
            {/* https://i.ibb.co/wMb31LQ/pexels-s-von-hoerst-2676096.jpg
https://i.ibb.co/YRj5hpn/pexels-s-von-hoerst-2920064.jpg */}
         <div className="flex gap-2 items-center justify-between">
         <h2 className="grow card-title text-3xl font-semibold w-full">
           {name}
          </h2>
          <p className="rounded-full text-cyan-700 px-5 py-2 text-xl text-center font-bold border border-dotted border-cyan-600 w-fit">{year}</p>
         </div>
         <div className="grid grid-cols-2  gap-3  text-xl font-semibold my-5">
            <p className="mt-5 flex gap-3 items-center"><FiUsers className="text-cyan-500 text-2xl"></FiUsers>{seats} People </p>
            <p className="mt-5 flex gap-3 items-center"><FaGasPump className="text-cyan-500 text-2xl"></FaGasPump>{fuelType}</p>
            <p className="mt-5 flex gap-2 items-center"><FiCrosshair className="text-cyan-500 text-2xl"></FiCrosshair> {fuelEfficiencyMetric}</p>
            <p className="mt-5 flex gap-3 items-center"><FaCog className="text-cyan-500 text-2xl"></FaCog>{transmission}</p>

         </div>
          <div className="card-actions flex justify-between items-center mt-5">
            <h3 className="text-xl font-semibold">$ {monthlyRentPrice} / Month</h3>
           <div className="flex gap-3 items-center justify-center">
            <p className="text-xl text-cyan-500"> <CiHeart className="text-4xl  hover:text-pink-500"></CiHeart></p>
           <button className="btn rounded-xl px-7 bg-cyan-600 text-white font-semibold text-xl hover:bg-cyan-400">info</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlecar;
