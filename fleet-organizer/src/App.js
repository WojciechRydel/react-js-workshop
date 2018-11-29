import React from 'react';
import './App.css';

class CarInfo extends React.PureComponent {
  render() {
   return (
      <li >
       <div className="car-info"> {this.props.car.name}
            <span className="car-registration">{this.props.car.number}</span>
        </div>
      </li>
    )
  }
}

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
        <div className="fleet-register">
          <h4>Registered Cars</h4>
          <div className="controls">
            <button onClick={this.addCar}>Add car</button>
          </div>
          <ul className="car-list">
          { this.state.cars.filter(car => car.number ).map((car, index) => (
            <CarInfo car={car} key={index}/>
          )) }
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
