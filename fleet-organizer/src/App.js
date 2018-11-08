import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="fleet-header">
          <h2>Fleet Organizer</h2>
        </header>
        <div className="fleet-register">
          <h4>Registered Cars</h4>
          <ul className="car-list">
            <li>
              First car:
              <span>WAW 12375</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
