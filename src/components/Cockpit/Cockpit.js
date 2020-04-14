import React from "react";
import CssClasses from "./Cockpit.module.css";
export const Cockpit = (props) => {
  const classes = [];
  let btnClasses = "";

  if (props.toggleValue) {
    btnClasses = CssClasses.Red;
  }

  if (props.person.length <= 2) {
    classes.push(CssClasses.red);
  }
  if (props.person.length <= 1) {
    classes.push(CssClasses.bold);
  }
  return (
    <div className={CssClasses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>I am a working</p>
      <button className={btnClasses} onClick={props.clicked}>
        Toggle Name
      </button>
    </div>
  );
};
