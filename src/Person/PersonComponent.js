import React from "react";
import PersonClasses from "./Person.module.css";
// import Radium from "radium";
import styled from "styled-components";

// let StyleDive = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   color: red;
//   border: 1px solid #eee;
//   box-shadow: 0px 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
//   @media (min-width: 500px) : {
//     width: 450px;
//   }
// `;
const Person = (props) => {
  // const style = {
  //   "@media(min-width:500px)": {
  //     width: "450px",
  //   },
  // };

  return (
    // <StyleDive>
    <div className={PersonClasses.Person}>
      <p onClick={props.click}>
        My name is {props.name} and age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
    // </StyleDive>
  );
};
//export default Radium(Person);
export default Person;
