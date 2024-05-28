import React from 'react';

const Footer = () => {
    return (
        
        <>  
            <section className='text-white w-full '>
                <div className='flex justify-between mx-8 mb:mx-0'>
                    <div  className='hidden md:block'>
                        <p>version</p>
                        <p>2024 Edition</p>
                    </div>
                    <div className=' w-3/12'>
                        <p className=''>Socials</p>
                        <span className='flex flex-row gap-8 md:flex md:gap-9'>
                            <p>LinkedIn</p>
                            <p>facebook</p>
                            <p>Instagram</p>

                        </span>
                        
                        
                    </div>
                </div>

            </section>
        
        </>
    );
};

export default Footer;