import React from 'react';
import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import StorageIcon from '@mui/icons-material/Storage'; 
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h4>{project.name}</h4>
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    <div className='project__links'>
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LaunchIcon />
        </a>
      )}

      {project.sourceCodeBackend && (
        <a
          href={project.sourceCodeBackend}
          aria-label='source code backend'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <StorageIcon /> 
        </a>
      )}

{project.videoLink && (
        <a
          href={project.videoLink}
          aria-label='video link'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <OndemandVideoIcon /> 
        </a>
      )}
    </div>
  </div>
);

export default ProjectContainer;
