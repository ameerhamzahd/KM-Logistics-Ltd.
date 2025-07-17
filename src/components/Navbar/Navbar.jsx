import React from 'react';
import logo from "../../assets/logo-premium.png"
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const navLinkStyle = ({ isActive }) =>
        `relative inline-block after:block after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full font-bold ${isActive ? 'lg:after:w-full' : ''}`;   

    return (
        <div className='flex fixed top-0 z-50 justify-center w-full'>
            <nav className="navbar flex justify-between max-w-7xl mx-auto rounded-3xl my-5 shadow-sm px-5">
                <div className=" hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-5">
                        <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
                        <li><NavLink to="/services" className={navLinkStyle}>Services</NavLink></li>
                        <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-center">
                    <div className="dropdown relative">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-white rounded-box w-52 space-y-1 text-gray-800">
                            <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
                            <li><NavLink to="/services" className={navLinkStyle}>Services</NavLink></li>
                            <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
                        </ul>
                    </div>

                    <Link to="/" className="text-xl text-primary font-bold flex items-center gap-2">
                        <img className="w-15 h-15" src={logo} alt="Logo" />
                    </Link>
                </div>

                <div className="">
                    <Link to="/login" className="btn btn-info px-10">
                        Get a Qoute
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;