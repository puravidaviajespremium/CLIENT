
import './ChartBar.css';
import React from 'react';


const BarChart = ({ prospecto, contactada, enEspera, ganada, perdido, global }) => {

  const handleMouseOver = (event) => {
    console.log(event.target.getAttribute('value'))
  };

  const divWidth = global ? { width: '150px' } : null;
  const sizeLetter = global ? { fontSize: '20px' } : { fontSize: '8px' };
  const sizeNumber = global ? { fontSize: '25px' } : { fontSize: '14px' };

  return (
    <div className="divGeneralChart">
      <div className='divDeBarras'>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5 style={{...sizeNumber, margin: '0px'}}>{`${prospecto}`}</h5>
          <div 
            value={`${prospecto}`} 
            onMouseOver={handleMouseOver} 
            className='divUno'
            style={{...divWidth ,height: `${prospecto*4}px`}}
          ></div>
          <span 
            style={{ 
              ...sizeLetter,
              fontWeight: 'bold'}}>Prospecto</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5  style={{...sizeNumber, margin: '0px'}}>{`${contactada}`}</h5>
          <div 
            value={`${contactada}`} 
            onMouseOver={handleMouseOver} 
            className='divDos'
            style={{...divWidth , height: `${contactada*4}px`}}
            ></div>
          <span 
            style={{
              ...sizeLetter, 
              fontWeight: 'bold'}}>Contactado</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5  style={{...sizeNumber, margin: '0px'}}>{`${enEspera}`}</h5>
          <div 
            value={`${enEspera}`} 
            onMouseOver={handleMouseOver}
            className='divTres'
            style={{...divWidth, height: `${enEspera*4}px`}}
            ></div>
          <span 
            style={{
              ...sizeLetter, 
              fontWeight: 'bold'}}>En Espera</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5  style={{...sizeNumber, margin: '0px'}}>{`${ganada}`}</h5>
          <div 
            value={`${ganada}`} 
            onMouseOver={handleMouseOver}
            className='divCuatro'
            style={{...divWidth, height: `${ganada*4}px`}}
            ></div>
          <span 
            style={{
              ...sizeLetter, 
              fontWeight: 'bold'}}>Ganado</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5  style={{...sizeNumber, margin: '0px'}}>{`${perdido}`}</h5>
          <div 
            value={`${perdido}`} 
            onMouseOver={handleMouseOver}
            className='divQuinto'
            style={{...divWidth, height: `${perdido*4}px`}}
            ></div>
          <span style={{
            ...sizeLetter, 
            fontWeight: 'bold'}}>Perdido</span>
        </div>  
      </div>
    </div>
  );
};

export default BarChart;