import React, { useEffect, useRef } from "react";
import CssClasses from "./Cockpit.module.css";

const Cockpit = (props) => {
  const selectBtnEle = useRef(null);

  useEffect(() => {
    // console.log("useEffect working in cockpit");
    // setTimeout(() => {
    //   alert("use effect working");
    // }, 1000);
    selectBtnEle.current.click();
    return () => {
      // console.log("[cockpit] return");
    };
  }, []);
  useEffect(() => {
    console.log("[usefecct] 2");
    return () => {
      console.log("[Effect 2 return");
    };
  });

  const classes = [];
  let btnClasses = "";

  if (props.toggleValue) {
    btnClasses = CssClasses.Red;
  }

  if (props.personLength <= 2) {
    classes.push(CssClasses.red);
  }
  if (props.personLength <= 1) {
    classes.push(CssClasses.bold);
  }
  return (
    <div className={CssClasses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>I am a working</p>
      <button ref={selectBtnEle} className={btnClasses} onClick={props.clicked}>
        Toggle Name
      </button>
    </div>
  );
};
export default React.memo(Cockpit);
