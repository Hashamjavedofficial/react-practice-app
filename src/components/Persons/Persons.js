import React from "react";
import Person from "./Person/PersonComponent";

export const Persons = (props) =>
  props.person.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}
        key={person.id}
      />
    );
  });
