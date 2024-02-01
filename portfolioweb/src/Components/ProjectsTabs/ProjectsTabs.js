
import React from 'react';
import './ProjectsTabs.css';


const ProjectTabs = ({ categories, activeTab, onChangeCategory }) => {
  return (
    <div className="project-tabs">
      {categories.map((category) => (
        <div
          key={category}
          className={`tab${category === activeTab ? ' active' : ''}`}
          onClick={() => onChangeCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default ProjectTabs;
