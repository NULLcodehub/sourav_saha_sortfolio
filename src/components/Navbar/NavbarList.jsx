import React from 'react';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion'

import './NavbarList.css';

const NavbarList = ({closeNav}) => {
    console.log(closeNav)
    return (
       <>
            <nav>
                <div>
                    <motion.ul className={` flex flex-col md:flex-row mt-14 md:mt-0 min-w-fit md:w-full justify-center  items-center navlinks`}>
                    
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}><Link to='Hero' smooth={true} duration={500}  onClick={closeNav}>Home</Link></motion.li>
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}><Link to='About' smooth={true} duration={500} onClick={closeNav}>About</Link></motion.li>
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}><Link to='Project' smooth={true} duration={500} onClick={closeNav} >Projects</Link></motion.li>
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}><Link to='Contact'smooth={true} duration={500} onClick={closeNav}>Contact</Link></motion.li>
                    </motion.ul>
                </div>
            </nav>
       </>
    );
};

export default NavbarList;