import React from 'react';
import './Blok1.css';
import tyl from './img/tyl.png';

function Blok1() {
  return (
    <div className="Blok1">
        <button><img src={tyl} alt="tylnia strona"/></button>
        <button><img src={tyl} alt="tylnia strona"/></button>
        <button><img src={tyl} alt="tylnia strona"/></button>
    </div>
  );
}

export default Blok1;
