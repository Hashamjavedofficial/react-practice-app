import React, { Component } from "react";
import CssClasses from "./App.module.css";
import Persons from "../components/Persons/Persons";
import { Cockpit } from "../components/Cockpit/Cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App] Consturctor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("[App] getDerivedStateFromProps");
    return state;
  }
  // componentWillMount() {
  //   console.log("[App] componentWillMount");
  // }
  componentDidMount() {
    console.log("[App] componentDidMount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App] componenetDidUpdate");
  }

  state = {
    person: [
      { id: 1, name: "Hasham", age: 22 },
      { id: 2, name: "Saif", age: 20 },
      { id: 3, name: "Aqsa", age: 16 },
    ],
    toggleValue: false,
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
    console.log("[App] render");
    let persons = null;

    if (this.state.toggleValue) {
      persons = (
        <Persons
          person={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.changeHandler}
        />
      );
    }

    return (
      <div className={CssClasses.App}>
        <Cockpit
          title={this.props.apptitle}
          clicked={this.toggleHandler}
          person={this.state.person}
          toggleValue={this.state.toggleValue}
        />
        {persons}
      </div>
    );
  }
}

export default App;
