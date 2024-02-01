import React, { useState } from 'react';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const openGithubLink = () => {
    window.open(project.githublink, '_blank');
  };

  return (
    <div className="project-card">
      <div
        className='title-github'>
        <h3>{project.title}</h3>
        <FontAwesomeIcon
          onClick={openGithubLink}
          icon={faGithub}
          size="3x"
          color={isHovered ? '#9fd3c7' : 'white'}
          style={{ cursor: 'pointer', boxShadow: 'rgba(0, 0, 0, 0.10) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className='project-description'>
        <p>{project.description}</p>
      </div>
      <div className='project-tech'>
        {project.tech?.map((tech, index) => (
            <div key={index} style={{ marginLeft: index !== 0 ? '0.7rem' : '0' }}>
              {tech}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
