import React from 'react';
import { Link } from 'react-scroll';

const NavbarList = () => {
    return (
       <>
            <nav>
                <div>
                    <ul className='flex flex-col md:flex-row mt-56 md:mt-0  md:w-full justify-center items-center '>
                    
                        <li><Link to='Hero' smooth={true} duration={500}>Home</Link></li>
                        <li><Link to='About' smooth={true} duration={500} >About</Link></li>
                        <li><Link to='Project' smooth={true} duration={500} >Projects</Link></li>
                        <li><Link to='Contact'smooth={true} duration={500} >Contact</Link></li>
                    </ul>
                </div>
            </nav>
       </>
    );
};

export default NavbarList;