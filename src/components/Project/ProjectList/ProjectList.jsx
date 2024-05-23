import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './projectList.css'

const ProjectList = ({projectDatas,onProjectHover,onProjectHoverLeave}) => {
    console.log(projectDatas)

    return (

       <>
        <section>
            <div>
                <ul>
                    {projectDatas.map((projectData,index)=>(

                        <li key={index}
                            className='text-sm md:text-base lg:text-50px uppercase flex justify-between gap-6 md:gap-0  items-center py-16 px-16 list-border
                            
                            transition duration-900
                            hover:px-20
                            hover:text-gray-500
                            
                            '
                            onMouseEnter={(e)=> onProjectHover(projectData,e)}
                            onMouseLeave={onProjectHoverLeave}
                        >
                            <div className='text-left'>
                                {projectData.projectName}
                            </div>
                            <div className='text-right'>
                                {projectData.tags[0]}
                            </div>
                        </li>



                    ))}
                </ul>
            </div>

        </section>
       
       </>
    );
};

export default ProjectList;