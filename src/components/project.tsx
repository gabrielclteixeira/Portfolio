import React from "react"
import Project from "../types/project"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"


export const ProjectCard: React.FC<{project: Project, index: number}> = ({project, index}) => {
    
return (
    <div key={index} className={`w-full lg:w-1/2 lg:h-full sm:h-1/2 text-gray-200 linear rounded-tr-3xl flex flex-col justify-center relative z-20 ${index % 2 === 0 ? '' : 'lg:items-end text-right'}`}>
        <div className='px-8 py-2 text-3xl font-mono font-black w-full justify-center align-middle z-20'>
            <span className="m-1 px-2 py-1 text-white rounded-md z-20">
                {project.duration}
            </span>
        </div>
        <div className={`flex px-10 items-center align-middle py-2 w-full z-20 ${index % 2 === 0 ? '' : 'lg:items-end lg:text-right lg:justify-end'}`}>
            <span className="flex items-center px-4 py-2 bg-blue-200 text-blue-800 text-xl rounded-md z-20">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 px-2" />
                {project.monthFrom} to {project.monthTo} 
            </span>
        </div>
        {index % 2 === 0 ? (
        <img
            src={project.imgSrc}
            alt="Project"
            className="absolute top-0 lg:left-0 opacity-50 object-cover lg:h-full h-full w-full lg:rounded-full lg:rounded-tl-none lg:rounded-bl-none md:rounded-none sm:rounded-none z-10"
        />
        ) 
        : (
        <img
            src={project.imgSrc}
            alt="Project"
            className="absolute top-0 lg:right-0 opacity-50 object-cover lg:h-full h-full w-full lg:rounded-full lg:rounded-tr-none lg:rounded-br-none md:rounded-none sm:rounded-none z-10"
        />)}

        <div className={`p-8 flex flex-wrap w-3/4 opacity-100 z-20 ${index % 2 === 0 ? '' : 'lg:items-end lg:text-right lg:justify-end'}`}>
            {project.techStack.map((tech, i) => (
                <span key={i} className={"m-1 px-2 py-1 text-white rounded-md text-base lg:text-lg font-semibold " + project.stackColors[i]}> 
                    {tech}
                </span>
            ))}
        </div>              
        <p className="p-8 text-2xl font-mono font-bold w-3/4 z-20">{project.summary}</p>
    </div>
)}