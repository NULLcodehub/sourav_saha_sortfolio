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
        
            <section className='h-screen '>
                <section className=''>
                        <div className='text-gray-300 text-40px md:text-70px mt-16 mx-10 md:mx-16 p-5'>
                            Let's Connect
                        </div>
                </section>
                

                <section className='flex flex-col-reverse justify-center items-center md:flex-row mx-5 md:mx-16 '>
                      <section className='bg-black text-white md:w-6/12 flex justify-center items-center  md:h-screen p-10 md:p-0'>
                          <div >
                              <div className='flex justify-center'>
                                <img src={Sourav} alt="" className='w-48 h-48 rounded-full' />
                              </div>
                              <div className='flex justify-center'>
                                <p className='w-11/12 md:w-8/12 my-0 md:my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi autem non esse error totam officiis iure nesciunt praesentium necessitatibus?	</p>
                              </div>


                          </div>


                      </section>



                  <section className=' md:w-6/12 flex justify-center items-center h-screen '>
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
                </section>




            </section>
        
        </>
    );
};

export default Contact;