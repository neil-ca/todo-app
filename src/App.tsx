import React, { Component, ReactNode } from "react";
import axios from 'axios'
import "./App.css";

class App extends Component {
  state = {
    title: "test",
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
        Hello !<h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default App;
