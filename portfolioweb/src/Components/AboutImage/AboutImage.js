import React from 'react';
import PropTypes from 'prop-types';
import './AboutImage.css';
import './AboutImage.scss';

const AboutImage = ({ imageUrl }) => {
  return (
    <div className="AboutImage">
      <div className="c-glitch" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="c-glitch__img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="c-glitch__img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="c-glitch__img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="c-glitch__img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="c-glitch__img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </div>
    </div>
  );
};

AboutImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default AboutImage;