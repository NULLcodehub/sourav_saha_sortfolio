import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../Navbar/Navbar';
import {motion, scroll} from 'framer-motion';


import './Hero.css';
const Hero = () => {

    const [scrolly,setScroll]=useState(0)

    scroll(progress=>{
        setScroll(progress)
    })
    // console.log(scrolly)

    

    return (
        <>
           
            <motion.div id='Hero' className='flex flex-col bg-white items-center h-screen'
            animate={{}}> 
                    <motion.div  className='flex justify-center flex-col items-center h-96 my-20'
                    
                        initial={{opacity:0}}
                        whileInView={{opacity:[0,0.1,0.2,0.3,0.4,0.5,0.7,0.8,0.9,1]}}
                        
                        


                    >
                        <motion.h1 className='dev-intro text-70px sm:text-80px  md:text-140px'>
                            <motion.div className='dev-intro-span1 text-gray-200'>Fullstack</motion.div>
                            <motion.div className=' developer px-16 z-10 relative md:bottom-9'>Developer</motion.div>

                        </motion.h1>
                        <p className=' w-9/12  text-gray-700 py-4 md:py-0 md:text-lg md:w-6/12'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aliquam iure, fugit voluptatum blanditiis, dicta inventore quibusdam dolor officiis itaque obcaecati eum. Quos dicta et omnis, labore excepturi nemo doloremque!
                        </p>
                    </motion.div>

                    {/* <motion.div className="intro marquee_container">
                        

                    </motion.div> */}
                

            </motion.div>
        </>
        
    );
};
// &nbsp;-&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; 
{/* <div   className="text-200px marquee">
                            Sourav Saha &nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp; Sourav Saha &nbsp;&nbsp;&nbsp;
                        </div> */}
export default Hero;