import React from 'react';
import { Link } from 'react-scroll';

import './NavbarList.css';

const NavbarList = ({closeNav}) => {
    console.log(closeNav)
    return (
       <>
            <nav>
                <div>
                    <ul className={` flex flex-col md:flex-row mt-14 md:mt-0 min-w-fit md:w-full justify-center items-center navlinks`}>
                    
                        <li><Link to='Hero' smooth={true} duration={500}  onClick={closeNav}>Home</Link></li>
                        <li><Link to='About' smooth={true} duration={500} onClick={closeNav}>About</Link></li>
                        <li><Link to='Project' smooth={true} duration={500} onClick={closeNav} >Projects</Link></li>
                        <li><Link to='Contact'smooth={true} duration={500} onClick={closeNav}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
       </>
    );
};

export default NavbarList;