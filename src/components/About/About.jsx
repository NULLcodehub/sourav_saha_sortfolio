import React,{useState} from 'react';
import { PiGithubLogoLight } from "react-icons/pi";
import { TbBrandPython } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { BiLogoDjango } from "react-icons/bi";
import { BiLogoFlask } from "react-icons/bi";


import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';


import './About.css'
const About = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
      };

      const circleX = useMotionValue(0);
      const circleY = useMotionValue(0);
    
      const magneticEffect = {
        x: isHovered ? (mousePosition.x - window.innerWidth / 2) * 0.5 : 0,
        y: isHovered ? (mousePosition.y - window.innerHeight / 2) * 0.5 : 0,
      };



    return (
        <div id="About" className=' bg-white   md:h-screen mx-10 md:mx-16'>
            <section className='about flex justify-center  text-gray-300 text-40px md:text-70px mt-16 p-5'>
                Get to Know Me

            </section>

            <section className='scroll-reveal text-xl md:text-5xl p-3 flex justify-center'>
                <div className=' md:w-10/12 leading-0'>
                    <p className='scroll-title' ><span>I'm Sourav Kumar Saha,</span></p>

                    <p>
                        <span>I studied Computer Science and Engineering at Independent University, Bangladesh.
                            I am skilled in React.js, Node.js, and Python, with a strong passion for web development. 
                            My expertise lies in
                            building dynamic, responsive applications and creating efficient, scalable backend solutions.</span>
                    </p>
                </div>
                

            </section>

            <section className='flex flex-col md:flex-row md:justify-between md:items-center mt-16 mx-0 md:mx-28'>
                <div className='  h-full w-full flex flex-col justify-center items-center'>
                    <div className='text-3xl mb-3 md:mx-20 text-gray-500 '>Tech Stack I  Know</div>

                    <div className=' text-gray-300  md:text-2xl skill-list p-6 '>
                       
                        <ul className=' flex text-2xl flex-col md:flex-row  md:gap-10'>
                            <li><RiReactjsFill/>React Js</li>
                            <li><IoLogoNodejs/>Node Js</li>
                            <li><TbBrandTailwind/>Tailwind Css</li>
                            <li><TbBrandPython/>Python</li>
                            <li><BiLogoDjango/>Django</li>
                            <li><BiLogoFlask/>Flask</li>
                            
                        </ul>
                      

                    </div>

                </div>

                {/* <div className='  md:w-6/12 flex justify-center my-8 md:my-0' onMouseMove={handleMouseMove}>
                      
                    <motion.div className='w-40 h-40 bg-black rounded-full flex justify-center items-center'
                        // onHoverStart={() => setIsHovered(true)}
                        // onHoverEnd={() => setIsHovered(false)}
                        // animate={}
                        
                        whileHover={{ scale: 1.1 }}
                        // transition={{ type: 'spring', stiffness: 300, damping: 700 }}
                    >
                            <PiGithubLogoLight className='w-20 h-20 text-white animate-pulse'/>
                    </motion.div>
                   
                </div> */}
            </section>



        </div>
    );
};

export default About;