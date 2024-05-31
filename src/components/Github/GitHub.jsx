import React from 'react';
import { BsGithub } from "react-icons/bs";
import './github.css'

const GitHub = () => {
    return (
        <>

            <section 
                 
                className='hidden  z-50  github md:flex justify-center items-center bg-white w-fit h-fit  rounded-full'>

                <a href="https://github.com/NULLcodehub" className='' target='blank'><BsGithub className=' w-14 h-14 z-50'/></a>
                
            </section>
        
        
        </>
    );
};

export default GitHub;