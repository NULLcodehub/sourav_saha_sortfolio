import React from 'react';

const Footer = () => {
    return (
        
        <>  
            <section className='text-white w-full bg-black py-2 '>
                <div className='flex justify-between mx-8 mb:mx-0'>
                    <div  className='hidden md:block'>
                        <p>version</p>
                        <p>2024 Edition</p>
                    </div>
                    <div className=' w-3/12'>
                        <p className=''>Socials</p>
                        <span className='flex flex-row gap-8 md:flex md:gap-9'>
                            <a href="https://www.linkedin.com/in/sourav-kumar-saha-5b3a1b1aa/" target='blank'><p>LinkedIn</p></a>
                            <a href="https://www.facebook.com/isshan.saha.1" target='blank'><p>Facebook</p></a>
                            <a href="https://www.instagram.com/iam_isshan_/" target='blank'><p>Instagram</p></a>

                        </span>
                        
                        
                    </div>
                </div>

            </section>
        
        </>
    );
};

export default Footer;