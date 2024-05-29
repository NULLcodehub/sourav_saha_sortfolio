import React from 'react';
import { Link as ListLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

import './NavbarList.css';

const NavbarList = ({closeNav}) => {
    // console.log(closeNav)
    return (
       <>
            <nav 
            data-aos='fade-down'
            data-aos-delay='3000'
            data-aos-duration='3000'
            >
                <div>
                    <motion.ul className={` flex flex-col md:flex-row mt-14 md:mt-0 min-w-fit md:w-full justify-center  items-center navlinks`}>
                    
                        <motion.li  whileHover={{scale:1.2,x:5,y:-2}}><ListLink to='Hero' smooth={true} duration={500}  onClick={closeNav}><Link to="/">Home</Link></ListLink></motion.li>
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}><ListLink to='About' smooth={true} duration={500} onClick={closeNav}>About</ListLink></motion.li>
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}><ListLink to='Project' smooth={true} duration={500} onClick={closeNav} >Projects</ListLink></motion.li>
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}><ListLink to='Contact'smooth={true} duration={500} onClick={closeNav}>Contact</ListLink></motion.li>
                    </motion.ul>
                    {/* <motion.ul className={` flex flex-col md:flex-row mt-14 md:mt-0 min-w-fit md:w-full justify-center  items-center navlinks`}>
                    
                        <motion.li  whileHover={{scale:1.2,x:5,y:-2}}>Home</motion.li>
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}>About</motion.li>
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}>Projects</motion.li>
                        <motion.li whileHover={{scale:1.2,x:5,y:-2}}>Contact</motion.li>
                    </motion.ul> */}
                </div>
            </nav>
       </>
    );
};

export default NavbarList;