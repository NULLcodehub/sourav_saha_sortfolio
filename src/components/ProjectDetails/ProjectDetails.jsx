import React from 'react';
import { Link,useParams } from 'react-router-dom';
import projectALLDatas from '../../../projects.json'
import Footer from '../Footer/Footer';
import useScrollToTop from '../../Hooks/useScrollTo';
import { LuGithub } from "react-icons/lu";
// import projectim from '../../assets/projectImage/project1.jpg'

const ProjectDetails = () => {
    // console.log(props.data)
    useScrollToTop();

    const { projectId } = useParams();
    console.log(projectId)
    const project =projectALLDatas.find((p) => p.projectId === parseInt(projectId));
    console.log(project)
    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <>
            <section className='h-screen mx-2 my-3 md:my-16 md:mx-32  '>
                <div>
                    <div className='text-40px md:text-70px flex gap-8'>
                        <div className=''>
                            {
                             project.projectName
                            
                            }
                        </div>
                        <a href={project.projectGithub} target='blank' className=' flex justify-center items-center animate-pulse'><LuGithub className='w-8 h-8 mt-4' /></a>
                    </div>
                    <div className='flex flex-col text-gray-400 md:flex-row justify-between my-10'>
                        <div className=' md:w-3/12 border-b-2 border-gray-300 md:px-2 py-4 md:py-1'>
                            Status: {project.status}
                        </div>
                        <div className=' md:w-3/12 border-b-2 border-gray-300 md:px-2 py-4 md:py-1'>
                            Start Date: {project.startDate}
                        </div>
                        <div className='md:w-3/12 border-b-2 border-gray-300  md:px-2 py-4 md:py-1'>
                            End Date: {project.endDate}
                        </div>
                    </div>
                    <div className=' flex justify-center  bg-gray-100 p-3'>
                        <div>
                            <p className='text-center text-neutral-300'>click to view live</p>
                            {console.log(project.url)}
                            <a href={project.url} target='blank' className=' flex justify-center'><img src={project.image} alt={project.image} className='w-10/12' /></a>
                        </div>
                       
                    </div>

                    <div className=' flex justify-center my-10'>
                        {/* <a href={project.url}><button className='bg-indigo-500 text-white px-5 py-3'>View live</button></a> */}
                        {/* <p className='w-9/12 text-3xl'>{project.description} </p> */}
                    </div>
                </div>


            </section>
            <Footer/>
        
        
        </>
    );
};

export default ProjectDetails;