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
      <>
          <div className="clueValue" onClick={() => handleClick(props.Clue[0])}
               data-testid="value">{200}</div>
          <div className="clueValue" onClick={() => handleClick(props.Clue[1])}
               data-testid="value">{400}</div>
          <div className="clueValue" onClick={() => handleClick(props.Clue[2])}
               data-testid="value">{600}</div>
          <div className="clueValue" onClick={() => handleClick(props.Clue[3])}
               data-testid="value">{800}</div>
          <div className="clueValue" onClick={() => handleClick(props.Clue[4])}
               data-testid="value">{1000}</div>
      </>
)
};

export default Clue;
