import React from "react";

const Clue = (props) => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  // console.log(JSON.stringify(props.Clue.value))


  return(
      <>
      <div className="clueValue" data-testid="value">{props.Clue[0].value}</div>
      <div className="clueValue" data-testid="value">{props.Clue[1].value}</div>
        <div className="clueValue" data-testid="value">{props.Clue[2].value}</div>
        <div className="clueValue" data-testid="value">{props.Clue[3].value}</div>
        <div className="clueValue" data-testid="value">{props.Clue[4].value}</div>
      </>
)
};

export default Clue;
