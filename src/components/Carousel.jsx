import React, { useState } from "react";
import { cars } from "../cars";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

const Carousel = ({ children: images }) => {
  
  const [curr, setCurr] = useState(0);
  const prevslide = () => {
    const isFirst = curr === 0;
    const newIndex = isFirst ? cars.length - 1 : curr - 1;
    setCurr(newIndex);
  };
  const nextslide = () => {
    const islast = curr === cars.length - 1;
    const newIndex = islast ? 0 : curr + 1;
    setCurr(newIndex);
  };
  const gotoslide = (index) => {
    setCurr(index);
  };
  return (
    <div className=" max-w-8xl h-[350px] md:h-[600px] w-full m-auto py-2 px-0" showThumbs={false}
    >
      <div
        style={{ backgroundImage: `url(${cars[curr].imgsrc})` }}
        className=" w-full h-full  bg-center bg-cover  brightness-75 contrast-120"
      ></div>
      <div className="relative flex flex-row justify-between top-[-55%] md:top-[-50%]">
        <div className="relative p-2 text-2xl text-white   cursor-pointer left-5 ">
          <FaChevronLeft onClick={prevslide}  className="absolute mt-20" />
        </div>
        <div className="p-2 text-2xl text-white mr-10 rounded-full cursor-pointer right-5 ">
          <FaChevronRight onClick={nextslide}  className="absolute mt-20"/>
        </div>
      </div>
      <div className="top-[-50px] relative flex justify-center py-2">
        {cars.map((item) => (
          <div
            key={item.id}
            // onClick={gotoslide(id)}
            className="text-2xl text-white cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
