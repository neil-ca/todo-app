import React, { Component, ReactNode } from "react";
import "./App.css";
import axios from 'axios'
import {Todo} from './components/Todo'

class App extends Component {
  state = {
    title: "test",
    todos: []
  };
  componentDidMount(): void {
    axios.get('http://localhost:8080/todos')
    .then((res : any) => {
      const todos = res.data
      this.setState({ todos })
      console.log(todos);
      
    })
  }
  render(): ReactNode {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <Todo todos={ this.state.todos } onSubmit = { () => console.log()}/>
      </div>
    );
  }
}

export default App;
