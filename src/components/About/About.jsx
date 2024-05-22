import React from 'react';


import './About.css'
const About = () => {
    return (
        <div id="About" className=' bg-white   h-screen mx-10 md:mx-16'>
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
        </div>
    );
};

export default About;