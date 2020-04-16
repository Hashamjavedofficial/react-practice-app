import React, { Component, Fragment } from "react";
import PersonClasses from "./Person.module.css";
import Aux from "../../../hoc/Auxiliray";
import withClass from "../../../hoc/WithClass";

class Person extends Component {
  render() {
    console.log("[Person] rendering....");
    return (
      // <div className={PersonClasses.Person}>
      <Aux>
        <p onClick={this.props.click}>
          My name is {this.props.name} and age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      // </div>
    );
  }
}
export default withClass(Person, PersonClasses.Person);
