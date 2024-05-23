import React, { useState } from 'react';
import projectALLDatas from '../../../projects.json'
import ProjectList from './ProjectList/ProjectList';
import HoverProject from './HoverProject/HoverProject';
const Projects = () => {

    const [hoveredProject,setHoveredProject]=useState(null)
    const [mouseMove,setMouseMove]=useState({x:0,y:0})

    const handelMouseEnter=(project,event)=>{
        setHoveredProject(project)
        setMouseMove({x:event.clientX,y:event.clientY})
    }

    const handelMouseMove=(event)=>{
        if(hoveredProject){
            setMouseMove({x:event.clientX,y:event.clientY})
        }
    }
    const handelMouseLeave=()=>{
        setHoveredProject(null)
    }

    
    return (
        <>
            <section className=''>
                <div className='text-gray-300 text-40px md:text-70px mt-16 mx-10 md:mx-16 p-5'>
                    Recent Works
                </div>
            </section>

            <section className='mx-0 md:mx-8 relative '

                onMouseMove={handelMouseMove}

            >
                <ProjectList 
                projectDatas={projectALLDatas}
                onProjectHover={handelMouseEnter}
                onProjectHoverLeave={handelMouseLeave}
                  
                />

                {
                    hoveredProject && 
                    <HoverProject
                        project={hoveredProject}
                        mouseMove={mouseMove}
                    
                    />

                }
            </section>
        </>
    );
};

export default Projects;