import React from 'react';
import PropTypes from 'prop-types';
import './AboutImage.css';

const AboutImage = ({ imageUrl }) => {
  return (
    <div className="AboutImage">
      <div className="block">
        <div className="side -main" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="side -left"></div>
      </div>
      <div className="block">
        <div className="side -main" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="side -left"></div>
      </div>
      <div className="block">
        <div className="side -main" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="side -left"></div>
      </div>
    </div>
  );
};

AboutImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default AboutImage;