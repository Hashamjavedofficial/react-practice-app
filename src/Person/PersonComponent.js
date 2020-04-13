import React from "react";
// import "./Person.css";
// import Radium from "radium";
import styled from "styled-components";

let StyleDive = styled.div`
  width: 60%;
  margin: 16px auto;
  color: red;
  border: 1px solid #eee;
  box-shadow: 0px 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) : {
    width: 450px;
  }
`;
const Person = (props) => {
  // const style = {
  //   "@media(min-width:500px)": {
  //     width: "450px",
  //   },
  // };

  return (
    // <div className="Person" style={style}>
    <StyleDive>
      <p onClick={props.click}>
        My name is {props.name} and age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDive>
    // </div>
  );
};
//export default Radium(Person);
export default Person;
