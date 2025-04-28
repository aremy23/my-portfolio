import React from 'react';

const LoadingScreen = ({ progress }) => {
  return (
    <div id="loading-screen" style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      opacity: progress < 100 ? 1 : 0,
      transition: 'opacity 0.5s'
    }}>
      <div className="loading-bar" style={{
        width: '300px',
        height: '4px',
        background: 'rgba(255,255,255,0.1)'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#afe0ff',
          transition: 'width 0.3s ease-out'
        }} />
      </div>
    </div>
  );
};

export default LoadingScreen;