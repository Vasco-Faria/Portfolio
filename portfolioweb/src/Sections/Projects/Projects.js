import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectTabs from '../../Components/ProjectsTabs/ProjectsTabs';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Projects = () => {
  const projectsData = [
    { title: 'Portfolio', description:'Personal portfolio website. Showcases skills, projects, and experience.', githublink: 'https://github.com/Vasco-Faria/Portfolio', tech: ['ReactJS'] },
    { title: 'Project 2', description: 'Description 2', githublink: 'project2.jpg' },
    { title: 'Project 3', description: 'Description 3', githublink: 'project3.jpg' },
    { title: 'Project 4', description: 'Description 4', githublink: 'project4.jpg' },
    { title: 'Project 5', description: 'Description 5', githublink: 'project5.jpg' },
    { title: 'Project 6', description: 'Description 6', githublink: 'project6.jpg' },
    { title: 'Project 7', description: 'Description 7', githublink: 'project7.jpg' },
    { title: 'Project 8', description: 'Description 8', githublink: 'project8.jpg' },
    { title: 'Project 9', description: 'Description 9', githublink: 'project9.jpg' },
    { title: 'Project 10', description: 'Description 10', githublink: 'project9.jpg' },
    { title: 'Project 11', description: 'Description 11', githublink: 'project9.jpg' },
    { title: 'Project 12', description: 'Description 12', githublink: 'project9.jpg' },
  ];

  const categories = ['Tab 1', 'Tab 2'];
  const projectsPerPage = 6;

  const [activeTab, setActiveTab] = useState(categories[0]);
  const [currentProjects, setCurrentProjects] = useState([]);

  useEffect(() => {
    const startIdx = categories.indexOf(activeTab) * projectsPerPage;
    const endIdx = startIdx + projectsPerPage;
    const defaultProjects = projectsData.slice(startIdx, endIdx);
    setCurrentProjects(defaultProjects);
  }, [activeTab, projectsData, projectsPerPage, categories]);

  const onChangeCategory = (tab) => {
    console.log('Changing category to:', tab);
    setActiveTab(tab);
  };

  useEffect(() => {
    console.log('Active Tab:', activeTab);
  }, [activeTab]);

  return (
    <div id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects">
        <ProjectTabs categories={categories} activeTab={activeTab} onChangeCategory={onChangeCategory} />
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

