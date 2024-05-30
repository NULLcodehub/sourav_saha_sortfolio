import React, { useState } from 'react';
import './Navbar.css'
import { BsFilterLeft,BsXLg  } from "react-icons/bs";


import NavbarList from './NavbarList';


const Navbar = () => {


    const [navActive,setNavActive]=useState(false);
    const setNavActiveHandaler=()=>{
            setNavActive(!navActive)
            // console.log(navActive)
            
    }

    const closeNav=()=>{
        setNavActive(false)
    }

    // console.log(!navActive)

    return (
        <>
        <div className={`mainNavbar top-0 bg-white z-50 left-0 sticky flex mt-2 ml-5 mr-5 h-14 min-w-fit rounded-md justify-between  ${navActive ? "h-fit transition-all duration-1000 ease-out ": null} `}
            
        
        
        >
            <>
                <div>
                    <h1 className='mx-5 my-2 flex items-center text-gray-500'
                        data-aos='fade-down'
                        data-aos-delay='3000'
                        data-aos-duration='3000'
                    >Code by 
                    <span className='text-black md:mx-2  '>Sourav</span>
                    <span className=' mx-2 hidden md:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#2d694f"></rect><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><circle cx="16" cy="16" r="7" fill="#e13e47"></circle><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>


                    </span>
                    
                    
                    
                    </h1>
                </div>

                {/* hidden md:block */}
                {/* {console.log(!navActive)} */}
                <div className={`mx-auto ${!navActive ? 'hidden md:block ': null}`}> 
                    <NavbarList closeNav={closeNav}/>
                </div>
            </>
            

            <div className=' block md:hidden my-4' 
                data-aos='fade-down'
                data-aos-delay='3000'
            >
                <button className='w-14 items-center' onClick={setNavActiveHandaler}>
                    { !navActive? 
                        <BsFilterLeft style={{ color: 'black', fontSize: '24px' }} /> :
                        <BsXLg style={{ color: 'black', fontSize: '24px' } }/>
                    }
                    
                </button>
            </div>
            
        </div>
            
        </>
    );
};

export default Navbar;