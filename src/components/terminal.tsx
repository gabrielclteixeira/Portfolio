import React from 'react';
import Typewriter from 'typewriter-effect';
import Project from '../types/project';

export const Terminal: React.FC<{project: Project, index: number, typewriterRefs: any, delay: number}> = ({project, index, typewriterRefs, delay = 10}) => {

return (
    <div className="w-full h-full px-4 lg:px-8 md:w-1/2 lg:h-full p-4 flex flex-col justify-center items-center text-gray-100 font-mono font-bold lg:text-xl">
        <div className='terminal flex w-full h-2/3 max-h-64 sm:max-h-96 md:max-h-96 pb-4 flex-col first:p-0 z-10 lg:max-h-full lg:h-3/4'>
            <div className="terminal-title-bar z-20 flex flex-row">
                <div className="terminal-tab">
                    {project.title}
                    <div className="terminal-tab-close">x</div>
                </div>
                <div className='flex justify-end flex-1'>
                    <div className="terminal-button minimize" />
                    <div className="terminal-button maximize" />
                    <div className="terminal-button close" />
                </div>
            </div>
            <div className='p-4 terminal-body'>
                <Typewriter
                    onInit={async (typewriter) => {
                        typewriterRefs[index].current = typewriter;
                        typewriter
                        .changeDelay(delay)
                    }}
                />
            </div>
        </div>
    </div>
    )
}