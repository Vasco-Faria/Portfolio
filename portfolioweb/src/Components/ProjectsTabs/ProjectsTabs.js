import React from 'react';
import './ProjectsTabs.css';

const ProjectTabs = ({ categories, activeCategory, onChangeCategory }) => {
  return (
    <div className="project-tabs">
      {categories.map((category) => (
        <div
          key={category}
          className={`tab ${category === activeCategory ? 'active' : ''}`}
          onClick={() => onChangeCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default ProjectTabs;