import { library } from '@fortawesome/fontawesome-svg-core';
import React ,{useState}from 'react';
import './projectList.css'

import { Routes,Route,Link } from 'react-router-dom';

const ProjectList = ({projectDatas,onProjectHover,onProjectHoverLeave}) => {
    console.log(projectDatas)


    const [clicked,setClicked]=useState(false)

    const [data,setData]=useState(null)

    const handleProjectDetails=(projectData)=>{
        console.log("projectlist",projectData.projectName)
        setData(projectData.projectName)
        setClicked(!clicked)
        
    }

    return (

       <>
        <section className='projectlist'>
            <div>
                <ul>
                    {projectDatas.map((projectData,index)=>(

                        <Link to={`/project/${projectData.projectId}`}><li key={index} 
                            className='text-sm md:text-base lg:text-50px uppercase flex justify-between gap-6 md:gap-0  items-center py-16 px-16 list-border
                            
                            transition duration-900
                            hover:px-20
                            hover:text-gray-500
                            
                            '
                            onMouseEnter={(e)=> onProjectHover(projectData,e)}
                            onMouseLeave={onProjectHoverLeave}

                            // onClick={()=>handleProjectDetails(projectData)}


                        >
                            <div className='text-left' >
                                {projectData.projectName}
                            </div>
                            <div className='text-right'>
                                {projectData.tags[0]}
                            </div>
                        </li>
                        </Link>
                        



                    ))}
                </ul>

            </div>

        </section>
        {
            console.log(data)
        }
        {clicked && 
        
            
                <ProjectDetails props={data} />
            
        }
       
       </>
    );
};

export default ProjectList;