import React, { useEffect, useRef} from 'react';
import {scroller} from 'react-scroll';
import Typewriter, { TypewriterClass, TypewriterState } from 'typewriter-effect';
import RootLayout from '@/app/layout';

export default function Projects() {
  const projects = [
    {
        imgSrc: '/images/me.jpg',
        duration: 'Tech stack',
        monthFrom: '2020-01',
        monthTo: '2020-02',
        description: 'My portfolio.',
        summary: '',
        stringRepetitions: [
            "My experience,",
            "My journey,",
        ],
        viewed: false,
        techStack: [
            "TypeScript/JavaScript",
            "Node.js",
            "React (Next.js)",
            "PHP",
            "Symfony",
            "MySQL",
            "C#",
            "Blazor"
        ],
      },
      {
        imgSrc: '/images/me.jpg',
        duration: '1 month',
        monthFrom: '2020-01',
        monthTo: '2020-02',
        description: 'This is a cool project.',
        summary: 'Another brief summary of what was done',
        stringRepetitions: [
            // "I made mistakes",
            // "But I learned from them",
        ],
        viewed: false,
        techStack: [
            "TypeScript/JavaScript",
            "Node.js",
        ]
      },
  ];

  

  const typewriterRefs = projects.map(() => React.createRef<TypewriterClass>()) as React.RefObject<TypewriterClass>[] | any;

  // Function to scroll to a specific project
  const scrollToProject = (index: number) => {
    scroller.scrollTo(`project-${index}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

    const repeatStrings = async (project: any, typewriter: TypewriterClass) => {
        for (const string of project.stringRepetitions) {
            console.log('Repeating string: ', string);
            await new Promise((resolve) => {
                typewriter
                .pauseFor(1000)
                // .deleteAll()
                .typeString(`<p class="inline break-words">${string}</p><br>`)
                .start()
                .callFunction(() => {
                    resolve(null);
                })
            });
        }
    };

  useEffect(() => {
   const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(async (entry) => {
                if (entry.isIntersecting) {
                    const visibleProjectIndex = projects.findIndex((_, index) => `project-${index}` === entry.target.id);
                    if (visibleProjectIndex !== -1) {   
                        scrollToProject(visibleProjectIndex);
                        if (!projects[visibleProjectIndex].viewed){
                            projects[visibleProjectIndex].viewed = true;
                            const typewriter = typewriterRefs[visibleProjectIndex].current;
                            if (typewriter) {
                                if (projects[visibleProjectIndex].stringRepetitions.length > 0) {
                                    await repeatStrings(projects[visibleProjectIndex], typewriter);
                                }
                                await new Promise((resolve) => {
                                    typewriter
                                        .pauseFor(1000)
                                        // .deleteAll()
                                        .typeString(`<p class="inline">${projects[visibleProjectIndex].description}</p>`)
                                        .start()
                                        .callFunction((state: TypewriterState) => {
                                            state.elements.cursor.style.display = 'none';
                                            resolve(null);
                                        });
                                })
                            }
                        }
                    }
                }
            });
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }
    );
  
    // Observe each project
    projects.forEach((_, index) => {
      const project = document.getElementById(`project-${index}`);
      if (project) {
        observer.observe(project);
      }
    });
  
    // Cleanup on component unmount
    return () => {
      projects.forEach((_, index) => {
        const project = document.getElementById(`project-${index}`);
        if (project) {
          observer.unobserve(project);
        }
      });
    };
  }, [projects]);

  return (
    <RootLayout>
      <div className="flex flex-col scroll-smooth">
        {projects.map((project, index) => (
          <div
            key={index}
            id={`project-${index}`}
            className="flex flex-col md:flex-row h-screen from-transparent to-gray-700 opacity-90 animate-gradient-expand pt-16 pb-16 first-of-type:mt-16 last-of-type:pb-0" 
            style={{
              scrollSnapAlign: 'start', // Align the start of the element to the snap container
            }}
          >
            <div className="w-full lg:h-full sm:h-1/2 text-gray-200 linear rounded-tr-3xl flex flex-col justify-center relative z-10">
                {/* <div className='p-4 text-3xl font-mono font-black w-full justify-center align-middle'>
                    <span className="m-1 px-2 py-1 bg-orange-300 text-white rounded-md ">
                        {project.duration}
                    </span>
                </div>
                <div className='p-4 text-3xl font-mono font-black w-full justify-center align-middle'>
                    <span className="m-1 px-2 py-1 bg-blue-300 text-white rounded-md ">
                        {project.monthFrom} - {project.monthTo}
                    </span>
                </div> */}
              <img
                src={project.imgSrc}
                alt="Project"
                className="absolute top-0 left-0 bottom-0 right-0 opacity-25 object-cover lg:h-full h-full w-full lg:rounded-full lg:rounded-tl-none lg:rounded-bl-none md:rounded-none lg:w-3/4 sm:rounded-none "
              />
            <div className="p-8 flex flex-wrap w-3/4">
                {project.techStack.map((tech, i) => (
                <span key={i} className="m-1 px-2 py-1 bg-blue-500 text-white rounded-md text-sm">
                    {tech}
                </span>
                ))}
            </div>              
            <p className="p-8 text-2xl font-mono font-bold w-3/4">{project.summary}</p>
            </div>
            <div
              className={`w-full h-full md:w-1/2 lg:h-full p-4 flex flex-col justify-center items-center text-gray-100 font-mono font-bold lg:text-xl`}
            >
              <Typewriter
                onInit={async (typewriter) => {
                  typewriterRefs[index].current = typewriter;
                  typewriter
                    .changeDelay(50)
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </RootLayout>
  );
}