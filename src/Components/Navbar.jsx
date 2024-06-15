import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [viewNav, setViewNav] = useState(false);

  const handleNavbar = () => {
    setViewNav((prevView) => !prevView);
  };

  return (
    <div>
      <section className='bg-[#add8e6] flex justify-between items-center mt-0 z-50 fixed w-full h-16 left-0 top-0'>
        <div className="flex justify-start items-center ml-4">
          <h1 className='text-4xl'>Cakap</h1>
        </div>
        <div className="flex justify-end items-center mr-6">
          <button onClick={handleNavbar} className="lg:hidden">
            {viewNav? <FaTimes/>  :  <FaBars/>}
          </button>
          <ul className={`lg:flex lg:flex-row p-4  ${!viewNav ? 'hidden' : 'flex flex-col justify-start items-start fixed top-16 left-0 bg-[#add8e6] w-full'}`}>
            <li className="ml-2 h-10 p-3 flex items-center hover:bg-white hover:w-32 hover:rounded-full  ">Adult course</li>
            <li className="ml-2 h-10 p-3 flex items-center hover:bg-white hover:w-32 hover:rounded-full ">Kids Course</li>
            <li className="ml-2 h-10 p-3 flex items-center hover:bg-white hover:w-32 hover:rounded-full ">Corporate</li>
            <li className="ml-2 h-10 p-3 flex items-center hover:bg-white hover:w-32 hover:rounded-full ">Blog</li>
            <li className="ml-2 h-10 p-3 flex items-center hover:bg-white hover:w-32 hover:rounded-full  ">Package</li>
            <li className="bg-slate-800 rounded-full ml-2 h-10 p-3 flex items-center text-white hover:bg-white hover:text-black">Contact Us</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
