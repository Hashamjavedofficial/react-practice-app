import React, { Component } from "react";
import "./App.css";
import Person from "./Person/PersonComponent";
class App extends Component {
  state = {
    person: [
      { name: "Hasham", age: 22 },
      { name: "Saif", age: 20 },
      { name: "Aqsa", age: 16 },
    ],
  };
  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 25 },
        { name: "Saif javed", age: 22 },
        { name: "Aqsa javed", age: 18 },
      ],
    });
  };
  changeHandler = (event) => {
    this.setState({
      person: [
        { name: "Hasham", age: 25 },
        { name: event.target.value, age: 22 },
        { name: "Aqsa javed", age: 18 },
      ],
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi i am react App</h1>
        <p>I am a working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Hasham!!!!")}
        >
          Switch name
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "Bisma")}
          changed={this.changeHandler}
        >
          My hobby is : Mobile using
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;
