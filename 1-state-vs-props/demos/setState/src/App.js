import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Todo extends Component {
  render() {
    return (
      <h6>{this.props.todo}</h6>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  clear() {
    this.setState({
      todos: [],
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button
            style={{fontSize: 'large', position: 'fixed', top: 50, left: 200}}
            onClick={() => {this.increment()}}>
             Increment
          </button>
          <h6>{this.state.count}</h6>
        </header>
      </div>
    );
  }
}

export default App;
