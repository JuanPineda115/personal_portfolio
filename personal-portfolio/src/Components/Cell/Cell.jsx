import React from 'react';
import './Cell.css';

const Cell = ({ 
  children, 
  xs = 12, // tamaño para móviles (0-12)
  sm, // tamaño para tablets
  md, // tamaño para desktop
  lg, // tamaño para pantallas grandes
  className = '',
  style
}) => {
  const classes = [
    'cell',
    `cell-xs-${xs}`,
    sm && `cell-sm-${sm}`,
    md && `cell-md-${md}`,
    lg && `cell-lg-${lg}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Cell; 