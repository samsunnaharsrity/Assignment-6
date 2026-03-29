import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    return (



<div className="navbar bg-base-100 shadow-sm w-full">

<div className='flex justify-between w-full lg:w-10/12 mx-auto '>
<div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a href="/">Products</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">FAQ</a></li>
      </ul>
    </div>
    <a className="text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
        DigiTools
    </a>
</div>

  
<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a href="/">Products</a></li>
        <li><a href="/">Features</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Testimonials</a></li>
        <li><a href="/">FAQ</a></li>
    </ul>
</div>

<div className="navbar-end gap-4 ">
    <MdOutlineShoppingCart className='hidden md:flex'/>
    <a className='font-bold hidden md:flex' href="/">LogIn</a>
    <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</button>
</div>

</div>
</div>


    );
}

export default Navbar;
