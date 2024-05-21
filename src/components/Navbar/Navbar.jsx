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
        <div className={`top-0 bg-white left-0 sticky flex mt-2 ml-5 mr-5 h-14 min-w-fit rounded-md justify-between  ${navActive ? "h-fit transition-all duration-1000 ease-out ": null} `}>
            <>
                <div>
                    <h1 className='mx-5 my-2'>Code by Sourav</h1>
                </div>

                {/* hidden md:block */}
                {/* {console.log(!navActive)} */}
                <div className={`mx-auto ${!navActive ? 'hidden md:block ': null}`}> 
                    <NavbarList closeNav={closeNav}/>
                </div>
            </>
            

            <div className=' block md:hidden my-4'>
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