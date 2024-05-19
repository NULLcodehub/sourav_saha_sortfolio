import React, { useState } from 'react';
import './Navbar.css'
import { BsFilterLeft } from "react-icons/bs";


import NavbarList from './NavbarList';


const Navbar = () => {


    const [navActive,setNavActive]=useState(false);

    const setNavActiveHandaler=()=>{
            setNavActive(!navActive)
            // console.log(navActive)
    }

    // console.log(!navActive)

    return (
        <>
        <div className='top-0 left-0 sticky  flex bg-indigo-200 mt-2 ml-5 mr-5 h-14 min-w-fit rounded-md justify-between items-center'>
            <>
                <div>
                    <h1 className='text-2xl mx-5 '>logo</h1>
                </div>

                {/* hidden md:block */}
                {/* {console.log(!navActive)} */}
                <div className={`mx-auto ${!navActive ? 'hidden md:block': null}`}> 
                    <NavbarList/>
                </div>
            </>
            

            <div className=' block md:hidden'>
                <button className='w-14 items-center' onClick={setNavActiveHandaler}>
                    <BsFilterLeft style={{ color: 'white', fontSize: '24px' }} />
                </button>
            </div>
            
        </div>
            
        </>
    );
};

export default Navbar;