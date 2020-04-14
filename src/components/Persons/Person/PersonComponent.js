import React from "react";
import PersonClasses from "./Person.module.css";

const Person = (props) => {
  return (
    <div className={PersonClasses.Person}>
      <p onClick={props.click}>
        My name is {props.name} and age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default Person;
