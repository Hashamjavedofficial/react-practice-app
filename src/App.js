import React, { Component } from "react";
import "./App.css";
import Person from "./Person/PersonComponent";
class App extends Component {
  state = {
    person: [
      { id: 1, name: "Hasham", age: 22 },
      { id: 2, name: "Saif", age: 20 },
      { id: 3, name: "Aqsa", age: 16 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 25 },
        { name: "Saif javed", age: 22 },
        { name: "Aqsa javed", age: 18 },
      ],
      toggleValue: false,
    });
  };
  changeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => p.id == id);
    const person = {
      ...this.state.person[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({
      person: persons,
    });
  };
  deletePersonHandler = (personIndex) => {
    //const personArr = this.state.person; // this can mutate the orignal array becasue this is reference
    const personArr = [...this.state.person]; // this is the better approch u cna also use slice() method
    personArr.splice(personIndex, 1);
    this.setState({ person: personArr });
  };
  toggleHandler = () => {
    const temp = this.state.toggleValue;
    this.setState({
      toggleValue: !temp,
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
    let persons = null;
    if (this.state.toggleValue) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.changeHandler(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi i am react App</h1>
        <p>I am a working</p>
        <button style={style} onClick={this.toggleHandler}>
          Toggle Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
