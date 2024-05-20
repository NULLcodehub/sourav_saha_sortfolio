import React from 'react';
import Spline from '@splinetool/react-spline';
import Navbar from '../Navbar/Navbar';
import {motion} from 'framer-motion';
import './Hero.css';
const Hero = () => {
    return (
        <>
            
            
            {/* <Navbar/> */}
            <motion.div id='Hero' className='flex  justify-center  h-screen '
                animate={{}}
            >
                <motion.div className='intro'>
                    Hey
                </motion.div>
            </motion.div>
        </>
        
    );
};

export default Hero;