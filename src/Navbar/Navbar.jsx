import React from 'react';
import './Navbar.css'
import { BsFilterLeft } from "react-icons/bs";


import NavbarList from './NavbarList';


const Navbar = () => {
    return (
        <>
        <div className='flex bg-indigo-200 mt-2 ml-5 mr-5 h-14 min-w-fit rounded-md justify-between items-center'>
            <>
                <div>
                    <h1 className='text-2xl mx-5 '>logo</h1>
                </div>

                <div className='mx-auto hidden md:block bg-white '>
                    <NavbarList/>
                </div>
            </>
            

            <div className=' block md:hidden'>
                <button className='w-14 items-center'>
                    <BsFilterLeft style={{ color: 'white', fontSize: '24px' }} />
                </button>
            </div>
            
        </div>
            
        </>
    );
};

export default Navbar;