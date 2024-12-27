//componente que recibe un entero como el nivel y pinta la cantidad de barras de verde con el nivel correspondiente, 3 como maximo 
import React from 'react';
import './LevelBars.css';

const LevelBars = ({ level }) => {
    return (
        <div className="level-bars">
            {[1, 2, 3].map((item, index) => (
                <div key={index} className={`level-bar ${item <= level ? 'active' : ''}`}></div>
            ))}
        </div>
    );
}

export default LevelBars;