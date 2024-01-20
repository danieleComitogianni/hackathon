// src/components/TopBar.js
import React from 'react';

function TopBar() {
  return (
    <div style={topBarStyle}>
      <h2 style={{ margin: 0, color: 'white' }}>My Data Visualization Project</h2>
    </div>
  );
}

const topBarStyle = {
  backgroundColor: 'lightblue',
  padding: '10px',
  position: 'fixed',
  top: 0,
  width: '100%',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

export default TopBar;
