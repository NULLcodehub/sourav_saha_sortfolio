import React from 'react';
import { Link,useParams } from 'react-router-dom';
import projectALLDatas from '../../../projects.json'

const ProjectDetails = () => {
    // console.log(props.data)


    const { projectId } = useParams();
    console.log(projectId)
    const project =projectALLDatas.find((p) => p.projectId === parseInt(projectId));
    console.log(project)
    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <>
            <section className='h-screen '>
                <div>
                    <div>
                        {
                            project.projectId
                        }
                    </div>
                </div>


            </section>
        
        
        
        </>
    );
};

export default ProjectDetails;