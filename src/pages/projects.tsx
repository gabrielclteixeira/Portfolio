import React, { useEffect, useRef} from 'react';
import {scroller} from 'react-scroll';
import Typewriter, { TypewriterClass, TypewriterState } from 'typewriter-effect';
import RootLayout from '@/app/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Terminal } from '@/components/terminal';
import Project from '@/types/project';
import projects from '@/json/projects.json';
import { ProjectCard } from '@/components/project';

export default function Projects() {

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
                .typeString(`<p class="inline break-words"><span style="color:#3490dc">[gabrielclteixeira@localhost ~]# </span>${string}</p><br>`)
                .start()
                .callFunction(() => {
                    resolve(null);
                })
            });
        }
    };

    useEffect(() => {
      const handleIntersection = async (entry: IntersectionObserverEntry, index: number) => {
        if (entry.isIntersecting) {
          scrollToProject(index);
          if (!projects[index].viewed) {
            projects[index].viewed = true;
            const typewriter = typewriterRefs[index].current;
            if (typewriter) {
              if (projects[index].stringRepetitions.length > 0) {
                await repeatStrings(projects[index], typewriter);
              }
              await new Promise((resolve) => {
                typewriter
                  .pauseFor(1000)
                  .typeString(`<p class="inline"><span style="color:#3490dc">[gabrielclteixeira@localhost ~]# </span>${projects[index].description}</p>`)
                  .start()
                  .callFunction((state: TypewriterState) => {
                    state.elements.cursor.style.display = 'none';
                    resolve(null);
                  });
              });
            }
          }
        }
      };
    
      const observers = projects.map((_, index) => {
        const observer = new IntersectionObserver(
          (entries) => entries.forEach((entry) => handleIntersection(entry, index)),
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
          }
        );
        const project = document.getElementById(`project-${index}`);
        if (project) {
          observer.observe(project);
        }
        return observer;
      });
    
      return () => {
        observers.forEach((observer, index) => {
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
            className="flex flex-col lg:flex-row lg:even:flex-row-reverse md:flex-row h-screen from-transparent to-gray-700 opacity-90 animate-gradient-expand lg:pt-16 lg:pb-16 lg:first-of-type:mt-4 lg:last-of-type:mb-4" 
            style={{
              scrollSnapAlign: 'start', // Align the start of the element to the snap container
            }}
          >
              <ProjectCard index={index} project={project}/>
              <Terminal project={project} index={index} typewriterRefs={typewriterRefs} delay={10} />
          </div>
        ))}
      </div>
    </RootLayout>
  );
}