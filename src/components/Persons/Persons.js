import React, { PureComponent } from "react";
import Person from "./Person/PersonComponent";

class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons] getDerivedStateFromProps");
    return state;
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextProps.person !== this.props.person ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
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
