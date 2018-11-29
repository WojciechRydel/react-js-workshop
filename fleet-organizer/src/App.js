import React from 'react';
import './App.css';

import CarRegister from './CarRegister'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cars : [
        {name: 'First car', number: 'WAW 123545'},
        {name: 'No Registered car'},
        {name: 'Second car', number: 'WAW 123545'}
      ]
    }

  }

  addCar = () => {
    this.setState({
      cars: [
        ...this.state.cars,
        {name: 'Some New Car', number: new Date().toISOString()}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="fleet-header">
          <h2>Fleet Organizer</h2>
        </header>
        <CarRegister cars={this.state.cars} onAddCar={this.addCar}/>
      </div>
    )
  }
}

export default App;
