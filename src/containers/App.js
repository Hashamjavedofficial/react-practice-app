import React, { Component } from "react";
import CssClasses from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Auxiliray";
import AuthContext from "../context/auth-context";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App] Consturctor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("[App] getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("[App] componentDidMount");
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.person != this.state.person) {
  //     console.log("true working");
  //     return true;
  //   } else {
  //     console.log("false working");

  //     return false;
  //   }
  // }
  componentDidUpdate() {
    console.log("[App] componenetDidUpdate");
  }

  state = {
    person: [
      { id: 1, name: "Hasham", age: 22 },
      { id: 2, name: "Saif", age: 15 },
      { id: 3, name: "Aqsa", age: 16 },
    ],
    toggleValue: false,
    showCockpit: true,
    stateCounter: 0,
    authenticated: false,
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
  changeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => p.id == id);
    const person = {
      ...this.state.person[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return {
        person: persons,
        stateCounter: prevState.stateCounter + 1,
      };
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
  loginHandler = () => {
    this.setState({
      authenticated: true,
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
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Show cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.apptitle}
              clicked={this.toggleHandler}
              personLength={this.state.person.length}
              toggleValue={this.state.toggleValue}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, CssClasses.App);
