import React from 'react';
import './Row.css';

const Row = ({ children, className = '', style, justify="start" }) => {
  return (
    //text-align: center, widht:100%
    <div className={`row ${className}`} style={{justifyContent: justify, ...style}}>
      {children}
    </div>
  );
};

export default Row; 