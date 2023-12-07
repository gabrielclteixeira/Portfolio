import React, { useEffect, useRef} from 'react';
import {scroller} from 'react-scroll';
import Typewriter, { TypewriterClass, TypewriterState } from 'typewriter-effect';
import RootLayout from '@/app/layout';

export default function Projects() {
  const projects = [
    {
        imgSrc: '/images/me.jpg',
        duration: '1 month',
        description: 'This was perfect',
        summary: 'A brief summary of what was done',
        stringRepetitions: [
            "I made mistakes",
            "But I learned from them",
        ],
        viewed: false,
      },
      {
        imgSrc: '/images/me.jpg',
        duration: '1 month',
        description: 'This is a cool project.',
        summary: 'Another brief summary of what was done',
        stringRepetitions: [
            // "I made mistakes",
            // "But I learned from them",
        ],
        viewed: false,
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
                .deleteAll()
                .typeString(`<p class="inline-flex ">${string}</p>`)
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
                                        .deleteAll()
                                        .typeString(`<p class="inline-flex ">${projects[visibleProjectIndex].description}</p>`)
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
                    className="flex h-screen from-transparent to-gray-700 opacity-80 animate-gradient-expand"
                    style={{
                    scrollSnapAlign: 'start', // Align the start of the element to the snap container
                    }}
                >
                    <div className="w-1/2 text-gray-200 linear rounded-tr-3xl flex flex-col justify-center relative">
                        <p className="p-8 text-3xl font-mono font-black absolute top-16">{project.duration}</p>
                        <img
                            src={project.imgSrc}
                            alt="Project"
                            className="absolute top-0 left-0 bottom-0 right-0 opacity-25 object-cover h-full w-3/4 rounded-full rounded-tl-none rounded-bl-none"
                        />
                        <p className="p-8 text-2xl font-mono font-bold">{project.summary}</p>
                    </div>
                    <div
                        className={`w-1/2 p-4 flex flex-col justify-center items-center text-gray-100 font-mono font-bold text-xl`}
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