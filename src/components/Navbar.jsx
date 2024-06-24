import { useState } from "react";
import { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  let [open, setOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full shadow-md sticky ">
      <div className="py-3 text-white bg-gray-800 px-7 md:flex md:justify-between md:px-10 ">
       <img src="images\Itachi.jpg" alt="" className="h-12 w-30 float-left"/>
        <h1 className="m mt-2 text-2xl font-bold cursor-pointer text-red-600 uppercase hover:text-white ">Itachi.Uchiha.io</h1>
        <div
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden text-red-600"
          onClick={() => setOpen(!open)}


        >
          {open ? <FaTimes />:<FaBars />}
        </div>
        <div
          className={`md:flex md:items-center md:pb-0  md:static absolute bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:bg-slate-800 ${
            open ? "" : "top-[-490px]"
          }`}
        >
          
          </div>
        </div>
      
    </header>
  );
};

// {/* <>
//    <h1>Logo</h1>
//         <nav ref={navRef}>
//           <a href="#">Home</a>
//           <a href="#">Movies </a>
//           <a href="#">TV Series</a>
//           <a href="#">Top Airing</a>
//           <button onClick={showNavbar}>
           
//           </button>
//         </nav>
//         <button onClick={showNavbar}>
//           <FaBars />
//         </button> 
//         </> */}
export default Navbar;
