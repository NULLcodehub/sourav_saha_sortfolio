import React,{useState,useRef,useEffect} from 'react';


const HoverProject = ({project,mouseMove}) => {

    
    const style = {
        position: 'fixed',
        top: mouseMove.y + 10 , 
        left:mouseMove.x + 10 ,
        // top:0,
        // left:0,
        // transform: `translate(${mouseMove.x - hoverBoxSize.width / 2}px, ${mouseMove.y - hoverBoxSize.height / 2}px)`, 
        padding: '10px',
        zIndex: 1000
        
      }
      console.log(project.projectName)
    return (
        <>
            <section className='hidden md:block  bg-black  z-10 text-white h-3/6 w-3/12'
                data-aos='fade-in'

                style={style}                 
                >
                <div className='text-center'>
                    <div className='text-2xl px-10 py-3 uppercase h-24 tracking-widest font-bold'>
                      {project.projectName}
                      
                    </div>
                </div>
                {/* <div className='flex justify-around'>
                    <div>{project.status}</div>
                    <div>{project.startDate}</div>
                    <div>{project.endDate}</div>
                </div> */}
                <div>
                    <img src={`../public/projectImage/${project.image}`} alt="" className='w-fit h-2/5  border-2'  />
                </div>
                


            </section>
        
        </>
    );
};

export default HoverProject;