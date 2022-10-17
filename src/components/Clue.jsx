import React from "react";
import Category from "./Category.jsx";


const Clue = (props) => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  // console.log(JSON.stringify(props.Clue.value))



    //Custom Method

    function handleClick(cluClicked)
    {
        props.setCurrentQuestion(cluClicked)
        console.log(cluClicked)

    }


  return(
      <><div className="clueValue" onClick={() => handleClick(props.Clue[0])} data-testid="value">{props.Clue[0].value}</div>
      <div className="clueValue" onClick={() => handleClick(props.Clue[1])} data-testid="value">{props.Clue[1].value}</div>
        <div className="clueValue" onClick={() => handleClick(props.Clue[2])} data-testid="value">{props.Clue[2].value}</div>
        <div className="clueValue" onClick={() => handleClick(props.Clue[3])} data-testid="value">{props.Clue[3].value}</div>
        <div className="clueValue" onClick={() => handleClick(props.Clue[4])} data-testid="value">{props.Clue[4].value}</div>
      </>
)
};

export default Clue;
