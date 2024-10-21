import React, { useState } from 'react';
import uniqid from 'uniqid';
import { projects } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import './Projects.css';

const Projects = () => {
  const INITIAL_PROJECTS = 3; 
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS);

  const handleShowMore = () => {
    setVisibleProjects((prev) => (prev + 3 <= projects.length ? prev + 3 : projects.length)); 
  };

  const handleShowLess = () => {
    setVisibleProjects(INITIAL_PROJECTS); 
  };

  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Proyectos</h2>

      <div className='projects__grid'>
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>

      <div className='projects__button-container'>
        {visibleProjects < projects.length && (
          <button className='projects__button' onClick={handleShowMore}>
            Ver más
          </button>
        )}

        {visibleProjects > INITIAL_PROJECTS && (
          <button className='projects__button' onClick={handleShowLess}>
            Ver menos
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
