import React, { useState } from 'react';
import './Projects.css';
import ProjectTabs from '../../Components/ProjectsTabs/ProjectsTabs';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Projects = () => {

    const projectsData = [
        { title: 'Project 1', description: 'Description 1', image: 'project1.jpg' },
        { title: 'Project 2', description: 'Description 2', image: 'project2.jpg' },
        
      ];

      const [activeTab, setActiveTab] = useState(0);

      const categories = ['Tab 1', 'Tab 2','Tab 3']; 
    
      const projectsPerPage = 6;
      const startIdx = activeTab * projectsPerPage;
      const endIdx = startIdx + projectsPerPage;
    
      const currentProjects = projectsData.slice(startIdx, endIdx);

    return (
        <div id='projects' className="projects-section">
            <h2>Projects</h2>
            <div className='projects'>
            <ProjectTabs
                categories={categories}
                activeTab={activeTab}
                onChangeCategory={(tab) => setActiveTab(tab)}
              />
                <div className="project-cards">
                  {currentProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
