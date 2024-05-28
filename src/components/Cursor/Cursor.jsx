import React, { useEffect, useState,useRef } from 'react';

import './Cursor.css'
const Cursor = () => {

  // console.log(cursorComponent)

    const pointerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pointer = pointerRef.current;
      if (pointer) {
        pointer.style.left = `${e.clientX - 10}px `;
        pointer.style.top = `${e.clientY - 10}px `;
        pointer.style.mixBlendMode='difference';

        
      }
      
    };

    
  


    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

    return (
        <>

       
            <div className='' ref={pointerRef}
                style={{
                    position: 'fixed',
                    zIndex: 999,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    
                    pointerEvents: 'none',
                    cursor:'none',
                    background:'white',
                    }}
            >  
        
                
            </div> 
          
          
        </>
    );
};

export default Cursor;