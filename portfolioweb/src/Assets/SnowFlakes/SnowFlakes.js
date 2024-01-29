import React from 'react';
import './SnowFlakes.css';

const Snowflake = ({ left, animationDuration }) => (
  <div className="snowflake" style={{ left, animationDuration }} />
);

export default Snowflake;