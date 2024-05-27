import React from 'react';

const Footer = () => {
    return (
        
        <>  
            <section className='text-white w-full'>
                <div className='flex justify-between'>
                    <div>
                        <p>version</p>
                        <p>2024 Edition</p>
                    </div>
                    <div className=' w-3/12'>
                        <p>Socials</p>
                        <span className='md:flex gap-9'>
                            <p>Linked In</p>
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