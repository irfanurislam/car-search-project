import React, { useEffect, useState } from "react";
import Singlecar from "./Singlecar";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Allcars = () => {
  const [cars, setAllCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [pageNumber, setPageNumber] = useState(0);
  const carsPerPage = 6; // Number of cars per page



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
  
// Paginate cars
const pageCount = Math.ceil(filteredCars.length / carsPerPage);
const offset = pageNumber * carsPerPage;
const paginatedCars = filteredCars.slice(offset, offset + carsPerPage);

const handlePageClick = ({ selected }) => {
  setPageNumber(selected);
};
 







  return (
    <div className="mb-28">
      <div className="mt-10 h-20 bg-slate-500 rounded-xl">
        <div className="flex h-full p-5 gap-5 justify-between items-center">
        <input
            type="text"
            placeholder="Search for cars name..."
            value={searchQuery} // Step 1: Bind input value to searchQuery
            onChange={(e) => setSearchQuery(e.target.value)} // Step 1: Handle input change
            className="input input-xl max-w-xl w-full focus:border-rose-800"
          />
          <select className="select select-bordered max-w-xs text-xl"
          
          >
            <option disabled selected>
             revoulation
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select
            className="select select-bordered max-w-xs text-xl"
            onChange={(e) => setSelectedBrand(e.target.value)}
            value={selectedBrand}
           
          >
            <option  value="All">All Brands</option>
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
            paginatedCars.map(car => <Singlecar key={car.id} car = {car}></Singlecar>)
        }
      </div>
      
      
      
      
      
      </div>



{/* pagination flex items-center gap-5 justify-end */}



      {/* Pagination */}
      <div className="mt-10 text-xl pb-20">
        <div className="flex justify-between items-center">
          <p>
            {pageNumber * carsPerPage + 1}-{Math.min(
              (pageNumber + 1) * carsPerPage,
              filteredCars.length
            )}{" "}
            out of {filteredCars.length} pages
          </p>

         
          <ReactPaginate
            previousLabel={<FiChevronLeft />}
            nextLabel={<FiChevronRight />} 
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex items-center gap-5 justify-end"}
            activeClassName={"active hover:bg- bg-white w-full border-2 border-black px-3 py-2 rounded-full"}
           
          />
        </div>
      </div>
    
    </div>
  );
};

export default Allcars;
