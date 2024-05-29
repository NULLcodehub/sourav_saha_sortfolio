import React, { useState, useEffect, useCallback } from 'react';
import Sourav from "../../assets/projectImage/sourav.jpg"
import Bangladesh from "../../assets/projectImage/bangladesh.png"

const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const [debouncedData, setDebouncedData] = useState(formData);
      const [status, setStatus] = useState('');
    
      // Debounce function
      const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            func(...args);
          }, delay);
        };
      };
    
      // Update formData state
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      // Debounced formData update
      const updateDebouncedData = useCallback(debounce(setDebouncedData, 300), []);
    
      // UseEffect to watch formData changes and debounce
      useEffect(() => {
        updateDebouncedData(formData);
      }, [formData, updateDebouncedData]);
    
      const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior which reloads the page
    
        try {
          const response = await fetch('https://formspree.io/f/xnqeygwg', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(debouncedData)
          });
    
          if (response.ok) {
            setStatus('Message sent!');
            setFormData({
              name: '',
              email: '',
              message: ''
            });
          } else {
            setStatus('Failed to send message. Please try again.');
          }
        } catch (error) {
          setStatus('Failed to send message. Please try again.');
        }
      };


    return (
        <>
            <section className='h-screen '>
                <section className=' md:mx-24 my-16 p-10 md:p-20 flex'>
                    <section className=' w-full md:w-9/12'>
                        <section className=' text-40px md:text-70px '>
                            <div className='flex flex-col leading-tight'>
                                <span className=''>Let's start a</span>
                                <span>project together</span>
                            </div>
                        </section>
                         <div>
                                <form onSubmit={handleSubmit}>
                                  <div className='formfeild'>
                                    <label htmlFor="name"></label>
                                    <input
                                      type="text"
                                      placeholder='Your name'
                                      id="name"
                                      name="name"
                                      value={formData.name}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                  <div className='formfeild'>
                                    <label htmlFor="email"></label>
                                    <input
                                      type="email"
                                      placeholder='youremail@email.com'
                                      id="email"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                  <div className='formfeild'>
                                    <label htmlFor="message"></label>
                                    <textarea
                                      placeholder='massage'
                                      id="message"
                                      name="message"
                                      value={formData.message}
                                      onChange={handleChange}
                                      required
                                    ></textarea>
                                  </div>
                                  <button type="submit" className='bg-black text-white px-5 py-2 rounded-md'>Send</button>
                                  {status && <p>{status}🫰🏻</p>}
                                </form>
                              </div>
                    </section>


                    <section className='hidden md:block'>
                        <div>
                            <img src={Sourav} alt="" className='w-24 h-24 rounded-full' />
                        </div>
                        <div className='my-10'>
                            <div>
                                <span className='text-xl'>Contact Details:</span>
                                <p className='mt-2 text-gray-400'>souravsaha.prgmr@gmail.com</p>
                                <p className='text-gray-400'>+8801752080105</p>
                            </div>
                            <hr className=' my-9'/>
                            <div>
                                <div>
                                    <span className='text-xl'>Country:</span>
                                    <p className='flex gap-1 mt-2 text-gray-400 '>Bangladesh <img src={Bangladesh} alt="" className='w-5 h-5' /></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

            </section>
        
        
        
        </>
    );
};

export default Form;