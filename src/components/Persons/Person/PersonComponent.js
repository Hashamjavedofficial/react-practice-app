import React, { Component } from "react";
import PersonClasses from "./Person.module.css";

class Person extends Component {
  render() {
    console.log("[Person] rendering....");
    return (
      <div className={PersonClasses.Person}>
        <p onClick={this.props.click}>
          My name is {this.props.name} and age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}
export default Person;
