import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectTabs from '../../Components/ProjectsTabs/ProjectsTabs';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Projects = () => {
  const projectsData = [
    { title: 'Portfolio', description:'Explore my skills, projects, and professional journey through a dynamic personal website. Offers a visual representation of my achievements and capabilities.', githublink: 'https://github.com/Vasco-Faria/Portfolio', tech: ['ReactJS'] },
    { title: 'Online library management platform', description: 'Streamline library tasks with this user-friendly platform. Easily manage and track books,library rooms and ebooks, simplifying the organization of library resources.', githublink: 'https://github.com/Vasco-Faria/Online_Library_Management_System',tech:['ReactJs','Springboot','Python','RabbitMQ',"MySQL","Docker"] },
    { title: 'Chat-Server', description: 'Explore a streamlined Chat Server facilitating user registration, channel joining, and message exchange. Utilizing a custom protocol for communication, it offers a foundation for building chat applications.', githublink: 'https://github.com/Vasco-Faria/CD_Chat_Server' , tech:['Python'] },
    { title: 'Secure Online Store', description: 'Emphasizing security, the project was crafted with the primary goal of ensuring a safe and secure environment for users. It encourages exploration of vulnerabilities while actively addressing and fixing any identified issues.', githublink: 'https://github.com/Vasco-Faria/Secure-Online-Store',tech:['ReactJs',"NodeJS",'MySQL',"Docker"] },
    { title: 'Music_Editor_Distributed', description: 'A distributed music editing system crafted for the Distributed Computing course, using Flask, Python Requests, and sockets for seamless server-client communication.', githublink: 'https://github.com/Vasco-Faria/CD_ProjFinal_Music_Editor_Distributed', tech:['Python'] },
    { title: 'Formula 1 Website', description: 'Crafted with a touch of technological prowess, the Formula 1 Website seamlessly integrates HTML, CSS, and JavaScript, delivering a dynamic and engaging online experience.', githublink: 'project6.jpg',tech:['HTML','CSS', 'JavaScript'] },
    { title: 'Syncal (Syncronized Calendar) ', description: 'A high-fidelity prototype, Syncal is a Web Application crafted by students for seamless calendar synchronization. Ideal for work groups, projects, and personal agendas.', githublink: 'project7.jpg',tech:['ReactJS','Bootstrap'] },
    { title: 'Digdug AI Agent', description: 'Dive into the realm of intelligent gaming with the creation of a Dig Dug agent, tactically conquering mazes to achieve over 10,000 points. Employing Python, agent architectures, and the provided game engine', githublink: 'https://github.com/Vasco-Faria/DigDug_AI_Agent' , tech:['Python'] },
    { title: 'Whisp (Social media App)', description: 'This project involves building a basic social network using the Django Framework. The main aim is to create a platform where users can register, make posts, upload images, and interact with each other in various ways.', githublink: 'https://github.com/Vasco-Faria/Whisp_Project', tech:["Django"] },
    { title: 'Youtube Database', description: 'Mysql database modeling for the YouTube platform. It enables users to upload, share, and view various types of content. Users can subscribe to others, like, comment on content, create playlists, and even subscribe to the premium service.', githublink: 'https://github.com/Vasco-Faria/BD/tree/main/Projeto_Final/APFT_107323_108536' , tech:["MySQL", "C#"] },
    { title: 'Load Balancer', description: 'Very simples HTTP/TCP Load Balancer. Implemented in Python3, single thread, using OS selector. The code contains 4 classes that implement different strategies to select the next back-end server.', githublink: 'https://github.com/Vasco-Faria/CD_Load_Balancer' , tech:["Python"]},
    { title: 'Coffe Machine Automation', description: 'Python script designed for coffee machine automation, simplifying coffee-making process.', githublink: 'project9.jpg',tech:["Python"] },
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

