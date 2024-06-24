import React, { useState } from "react";
import { data } from "../../data.js";
import Cards from "./Cards.jsx";
import Carousel from "./Carousel";

const searchQueryHandler = (event) => {
  if (event.key === "Enter" && invalue.length > 0) {
    setSearch(invalue);
  }};
const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(true);
  return (
    <div className="p-2 bg-black text-gray ">
      <div className="flex justify-around pt-3">
        <input
          className="w-[600px] p-3 rounded-full"
          type="text"
          placeholder="Search"
          value={searchValue}
          onKeyUp={searchQueryHandler}
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={() => setShow(false)}
           onBlur={() => setShow(true)}
           
        />
      </div>
      {show && <Carousel
      autoPlay={true}
      showArrows={false}
      infiniteLoop={true}
      interval={120}
      stopOnHover={false}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}/>}
      <div className="flex flex-row flex-wrap items-center justify-around py-5 sm:justify-evenly">
        {data
          .filter((val) => {
            if (searchValue == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return val;
            }
            else if (
              val.subtitle.toLowerCase().includes(searchValue.toLowerCase())
            ){return val;}
          })
          .map((val) => (
            <Cards
              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              subtitle={val.subtitle}
            />
            
          ))}
      </div>
    </div>
     
  );

};

export default SearchComponent;
