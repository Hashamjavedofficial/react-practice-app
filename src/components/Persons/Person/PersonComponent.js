import React, { Component, Fragment } from "react";
import PersonClasses from "./Person.module.css";
import Aux from "../../../hoc/Auxiliray";
import withClass from "../../../hoc/WithClass";
import PropTypes from "prop-types";
import Persons from "../Persons";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.selectedEle.focus();
    this.inputElementRef.current.focus();
  }
  static contextType = AuthContext;
  render() {
    console.log("[Person] rendering....");
    return (
      // <div className={PersonClasses.Person}>
      <Aux>
        {this.context.authenticated ? (
          <p>This is authenticated</p>
        ) : (
          <p> Please login</p>
        )}

        <p onClick={this.props.click}>
          My name is {this.props.name} and age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          // ref={(currentEle) => (this.selectedEle = currentEle)}
          ref={this.inputElementRef}
          value={this.props.name}
        />
      </Aux>
      // </div>
    );
  }
}

// Person.propTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number,
//   changed: PropTypes.func,
// };

export default withClass(Person, PersonClasses.Person);
