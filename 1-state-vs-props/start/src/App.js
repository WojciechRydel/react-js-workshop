import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const a = {
a: 2
}

function SomeComponent(props) {
  console.log(props)
  return (
        <div>
          <button onClick={props.onChange}>
          increment
          </button>
          <h6>{props.count}</h6>
        </div>
  )
}



class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      paragraph: "hey"
    }
  }

  increment() {
    for (var i = 0, len = 100; i < len; i++) {
      console.log(i)
      this.setState((state) => {
        return {
          count: state.count + 1
        }
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SomeComponent count={this.state.count}
        onChange={() =>  {
          this.increment()
        }}
        />
        </header>
      </div>
    );
  }
}

export default App;
