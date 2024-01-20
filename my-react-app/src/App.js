// src/App.js
import React from 'react';
import TopBar from './components/TopBar';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css'; // Import HoverBox.css and WelcomeMessage.css

function App() {
  return (
    <div>
      <TopBar />
      <WelcomeMessage />
      {/* Add more components here */}
    </div>
  );
}

export default App;
