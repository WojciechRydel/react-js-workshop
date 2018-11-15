import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="fleet-header">
        <h2>Fleet Organizer</h2>
      </header>
      <div className="fleet-register">
        <h4>Registered Cars</h4>
        <ul className="car-list">
          <li>
            <div className="car-info">
            First car
            <span className="car-registration">WAW 12375</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
