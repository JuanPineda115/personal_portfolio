import React from 'react';
import './Section.css';

const Section = ({ children, className = '', padding = 'normal' }) => {
  return (
    <section className={`section section-padding-${padding} ${className}`}>
      {children}
    </section>
  );
};

export default Section; 