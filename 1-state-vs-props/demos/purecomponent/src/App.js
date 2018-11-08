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
      todos: []
    }
  }

  addTodo() {
    this.setState((state) => {
      return {
        todos: [...state.todos, `Todo from ${new Date().toISOString()}`]
      }
    })
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
            onClick={() => {this.addTodo()}}>
             Add todo
          </button>
          <button
            style={{fontSize: 'large', position: 'fixed', top: 50, right: 200}}
            onClick={() => {this.clear()}}>
             Clear
          </button>
          <h4>Todos</h4>
          <ul style={{minHeight: 500, width: 500, border: '2px solid black'}}>
          {this.state.todos.map((todo, i) => (<Todo todo={todo} key={i}/>))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
