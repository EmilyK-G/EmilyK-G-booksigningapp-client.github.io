import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({loadingPage}) => {
  return (
    <div className="center">
      <div className="waves_container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <p>Loading {loadingPage}...</p>
    </div>
  )
}

export default LoadingSpinner