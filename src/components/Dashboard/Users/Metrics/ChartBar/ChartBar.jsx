import './ChartBar.css';
import React from 'react';

const BarChart = ({ prospectCount, contactedCount, waitingCount, wonCount, lostCount, global }) => {

  const handleMouseOver = (event) => {
    event.target.getAttribute('value')
  };

  const divWidth = global ? { width: '80px' } : null;
  const sizeLetter = global ? { fontSize: '16px' } : { fontSize: '8px' };
  const sizeNumber = global ? { fontSize: '18px' } : { fontSize: '14px' };

  return (
    <div className="divGeneralChart">
      <div className='divDeBarras'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h5 style={{ ...sizeNumber, margin: '0px' }}>{`${prospectCount}`}</h5>
          <div
            value={`${prospectCount}`}
            onMouseOver={handleMouseOver}
            className='divUno'
            style={{ ...divWidth, height: `${prospectCount * 10}px` }}
          ></div>
          <span
            style={{
              ...sizeLetter,
              fontWeight: 'bold'
            }}>Prospectos</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h5 style={{ ...sizeNumber, margin: '0px' }}>{`${contactedCount}`}</h5>
          <div
            value={`${contactedCount}`}
            onMouseOver={handleMouseOver}
            className='divDos'
            style={{ ...divWidth, height: `${contactedCount * 10}px` }}
          ></div>
          <span
            style={{
              ...sizeLetter,
              fontWeight: 'bold'
            }}>Contactados</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h5 style={{ ...sizeNumber, margin: '0px' }}>{`${waitingCount}`}</h5>
          <div
            value={`${waitingCount}`}
            onMouseOver={handleMouseOver}
            className='divTres'
            style={{ ...divWidth, height: `${waitingCount * 10}px` }}
          ></div>
          <span
            style={{
              ...sizeLetter,
              fontWeight: 'bold'
            }}>En Espera</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h5 style={{ ...sizeNumber, margin: '0px' }}>{`${wonCount}`}</h5>
          <div
            value={`${wonCount}`}
            onMouseOver={handleMouseOver}
            className='divCuatro'
            style={{ ...divWidth, height: `${wonCount * 10}px` }}
          ></div>
          <span
            style={{
              ...sizeLetter,
              fontWeight: 'bold'
            }}>Ganados</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h5 style={{ ...sizeNumber, margin: '0px' }}>{`${lostCount}`}</h5>
          <div
            value={`${lostCount}`}
            onMouseOver={handleMouseOver}
            className='divQuinto'
            style={{ ...divWidth, height: `${lostCount * 10}px` }}
          ></div>
          <span style={{
            ...sizeLetter,
            fontWeight: 'bold'
          }}>Perdidos</span>
        </div>
      </div>
    </div>
  );
};

export default BarChart;