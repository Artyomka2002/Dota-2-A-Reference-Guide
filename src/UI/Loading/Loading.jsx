import cl from './Loading.module.css'

import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className={cl.loadingSpinnerContainer}>
      <div className={cl.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
