import React, { Component } from "react";
import Person from "./Person/PersonComponent";

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons] getDerivedStateFromProps");
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons] shouldCOmponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons [getSnapshotBeforeUpdate]");
    return { messgae: "getSnashotBeforeUpdate" };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Perosns] componentDidMount");
    console.log(snapshot);
  }

  render() {
    return this.props.person.map((person, index) => {
      console.log("[Persons] rendering...");
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          key={person.id}
        />
      );
    });
  }
}
export default Persons;
