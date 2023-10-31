
import './ChartBar.css';
import React from 'react';

const BarChart = ({ prospectCount, contactedCount, waitingCount, wonCount, lostCount, global }) => {

  const handleMouseOver = (event) => {
    event.target.getAttribute('value')
  };

  const divWidth = global ? { width: '150px' } : null;
  const sizeLetter = global ? { fontSize: '20px' } : { fontSize: '8px' };
  const sizeNumber = global ? { fontSize: '25px' } : { fontSize: '14px' };

  return (
    <div className="divGeneralChart">
      <div className='divDeBarras'>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5 style={{...sizeNumber, margin: '0px'}}>{`${prospectCount}`}</h5>
          <div 
            value={`${prospectCount}`} 
            onMouseOver={handleMouseOver} 
            className='divUno'
            style={{...divWidth ,height: `${prospectCount*4}px`}}
          ></div>
          <span 
            style={{ 
              ...sizeLetter,
              fontWeight: 'bold'}}>prospectCount</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5  style={{...sizeNumber, margin: '0px'}}>{`${contactedCount}`}</h5>
          <div 
            value={`${contactedCount}`} 
            onMouseOver={handleMouseOver} 
            className='divDos'
            style={{...divWidth , height: `${contactedCount*4}px`}}
            ></div>
          <span 
            style={{
              ...sizeLetter, 
              fontWeight: 'bold'}}>Contactado</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5  style={{...sizeNumber, margin: '0px'}}>{`${waitingCount}`}</h5>
          <div 
            value={`${waitingCount}`} 
            onMouseOver={handleMouseOver}
            className='divTres'
            style={{...divWidth, height: `${waitingCount*4}px`}}
            ></div>
          <span 
            style={{
              ...sizeLetter, 
              fontWeight: 'bold'}}>En Espera</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5  style={{...sizeNumber, margin: '0px'}}>{`${wonCount}`}</h5>
          <div 
            value={`${wonCount}`} 
            onMouseOver={handleMouseOver}
            className='divCuatro'
            style={{...divWidth, height: `${wonCount*4}px`}}
            ></div>
          <span 
            style={{
              ...sizeLetter, 
              fontWeight: 'bold'}}>Ganado</span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h5  style={{...sizeNumber, margin: '0px'}}>{`${lostCount}`}</h5>
          <div 
            value={`${lostCount}`} 
            onMouseOver={handleMouseOver}
            className='divQuinto'
            style={{...divWidth, height: `${lostCount*4}px`}}
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