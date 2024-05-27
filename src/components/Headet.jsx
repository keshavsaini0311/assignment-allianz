/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Headet() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" top-0 sticky bg-gradient-to-r from-gray-500  to-gray-600 ">

  <header className="  w-full  z-50 flex flex-row items-center justify-between sm:justify-around p-2  bg-inherit backdrop:blur-sm text-white">
  <a
    href="/"
    className="flex items-center h-10 px-10 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
  >
    <img src="src\assets\img\UNFLUKE.png" alt="" className="h-20 mt-1" />
  </a>
  <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
    <a href="/" className="hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg">
      Home
    </a>
    <a href="/" className="hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg">
      About
    </a>
    <a href="/" className="hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg">
      Career
    </a>
    <a href="/" className="hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg">
      Contact
    </a>

  </nav>
  <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
    <button
      onClick={() => setShowMenu(!showMenu)}
      className="sm:hidden font-bold text-xl hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg"
      >
      {showMenu ? <GrClose /> : <GiHamburgerMenu />}
    </button>
    {showMenu && (
      <>
        <a href="/" className="hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg">
          Home
        </a>
        <a href="/" className="hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg">
          About
        </a>
        <a href="/" className="hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg">
          Career
        </a>
        <a href="/" className="hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg">
          Contact
        </a>
      </>
    )}
  </nav>
</header>
    </div>
  )
}

export default Headet