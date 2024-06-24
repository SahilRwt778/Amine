import React from "react";

export default function Cards(props) {
  return (
    <>
      <div id="services ">
        <div className="bg-[#262626] hover:bg-red-600 hover:translate-y-[-5] p-2.5 text-xs font-light rounded-xl m-2  md:m-4 ">
          <a href="#" className="hover:no-underline">
            <div className="flex flex-col items-center pr-0 text-white">
              <div className="">
                <img
                  src={props.imgsrc}
                  alt=""
                  className="transition-transform bg-cover w-[150px] h-[250px] sm:w-[200px] sm:h-[300px]"
                />
              </div>
              <h2 className="text-xs font-medium sm:text-xl ">{props.title}</h2>
              <span className="text-xs sm:text-sm ">{props.subtitle}</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
