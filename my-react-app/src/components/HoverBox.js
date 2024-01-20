// src/components/HoverBox.js
import React from 'react';
import './HoverBox.css'; // Import the CSS for styling

function HoverBox({ title, subtitle }) {
  return (
    <div className="hover-box">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default HoverBox;
