import React, { useState, useEffect, useCallback } from 'react';
import Sourav from "../../assets/projectImage/sourav.jpg"

import './Contact.css'

const Contact = () => {
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
        
            <section className='h-screen bg-black px-10 py-10  flex justify-center items-center  '>
                {/* <section className=''>
                        <div className='text-gray-300 text-40px md:text-70px mt-16 mx-10 md:mx-16 p-5'>
                            Let's Connect
                        </div>
                </section>
                

                <section className='bg-indigo-200 flex flex-col-reverse md:flex-row justify-center  '>
                      <section className='bg-black w-5/12 flex items-center '>
                          <div className=''>
                              <div className='flex justify-center'>
                                <img src={Sourav} alt="" className='w-48 h-48 rounded-full' />
                              </div>
                              <div className='flex justify-center  text-white'>
                                <p className='w-9/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi autem non esse error totam officiis iure nesciunt praesentium necessitatibus?	</p>
                              </div>


                          </div>


                      </section>



                  <section className='bg-gray-300 w-5/12 flex justify-center '>
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
                </section> */}

                
                <section className=' h-full w-full p-28'>
                  <div className='text-white  flex border-b-2 border-b-white'>  
                    <div className='text-white text-90px ' >
                      <img src={Sourav} alt="" className='w-20 h-20 inline rounded-full '/><span className='mx-10'>Let's get</span><div className='relative bottom-10'>connected</div>
                    </div>
                       
                  </div>
                  <div className='flex justify-end'>
                        <div className='w-56 h-56 bg-indigo-500 rounded-full mx-16 relative bottom-24'></div>
                  </div>
                  

                </section>

            </section>
        
        </>
    );
};

export default Contact;