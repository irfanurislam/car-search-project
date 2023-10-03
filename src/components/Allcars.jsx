import React, { useEffect, useState } from "react";
import Singlecar from "./Singlecar";
import { Link, useParams } from "react-router-dom";

const Allcars = () => {
  const [cars, setAllCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCars(data);
      });
  }, []);


//   const filteredCars = cars.filter((car) =>
//   car.name.toLowerCase().includes(searchQuery.toLowerCase())
// );

const uniqueBrands = [...new Set(cars.map((car) => car.make))];

  // Step 3: Filter the cars based on search query and selected brand
  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedBrand === "All" || car.make === selectedBrand)
      
  );
  

 







  return (
    <div className="mb-28">
      <div className="mt-10 h-20 bg-slate-500 rounded-xl">
        <div className="flex h-full p-5 gap-5 justify-between items-center">
        <input
            type="text"
            placeholder="Search for cars name..."
            value={searchQuery} // Step 1: Bind input value to searchQuery
            onChange={(e) => setSearchQuery(e.target.value)} // Step 1: Handle input change
            className="input input-xl max-w-xl w-full"
          />
          <select className="select select-bordered max-w-xs"
          
          >
            <option disabled selected>
              Who shot first?
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select
            className="select select-bordered max-w-xs"
            onChange={(e) => setSelectedBrand(e.target.value)}
            value={selectedBrand}
          >
            <option value="All">All Brands</option>
            {uniqueBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
              
            ))}
          </select>
        </div>
      </div>



      <div className="mt-20">
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
            filteredCars.map(car => <Singlecar key={car.id} car = {car}></Singlecar>)
        }
      </div>
      
      
      
      
      
      </div>







      {/* Pagination */}
    
    </div>
  );
};

export default Allcars;
