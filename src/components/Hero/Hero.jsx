import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../Navbar/Navbar';
import {motion, scroll} from 'framer-motion';
import GitHub from '../Github/GitHub';
import 'aos/dist/aos.css'
import AOS from 'aos';

import './Hero.css';
const Hero = () => {



    return (
        <>
           
            <motion.div id='Hero' className='flex flex-col md:mx-16   items-center h-98  md:h-screen   '
            animate={{}}> 
                    <motion.div  className='flex  justify-center flex-col items-center h-96 md:mt-40'
                    
                        initial={{opacity:0}}
                        whileInView={{opacity:[0,0.1,0.2,0.3,0.4,0.5,0.7,0.8,0.9,1]}}
                        

                    >
                        <motion.h1  id='header-intro' className='dev-intro  text-50px sm:text-80px  md:text-200px'>
                            <motion.div  className='dev-intro-span1 ml-4 md:ml-0 text-gray-200 w-fit' 
                              data-aos='fade-up'
                              data-aos-delay='3000'
                              data-aos-duration='3000'
                              
                            >
                                Fullstack
                            </motion.div>

                            <motion.div className=' developer px-16 z-10 relative md:bottom-9 text-black'
                                data-aos='fade-in'
                                data-aos-duration='1000'
                                data-aos-delay="7"
                            >
                                Developer.
                            </motion.div>

                        </motion.h1>
                        <p className=' w-9/12  text-gray-500 py-4 md:py-0 md:text-lg md:w-6/12 discription-p'
                            data-aos='fade-down'
                            data-aos-delay='3000'
                            data-aos-duration='3000'
                        >
                            Hi, I am <span className='text-slate-950'>Sourav Saha</span>.I am a <span className='text-slate-950'>Fullstack Enginner</span>.I design and code beautiful simple <span className='text-slate-950'>digital products</span>. 
                        </p>
                    </motion.div>

                    {/* <motion.div className="intro marquee_container">
                        

                    </motion.div> */}
                

            </motion.div>
            {/* <section 
            >
                <GitHub/>
            </section> */}
            
        </>
        
    );
};
// &nbsp;-&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; 
{/* <div   className="text-200px marquee">
                            Sourav Saha &nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp;
                        </div> */}
export default Hero;