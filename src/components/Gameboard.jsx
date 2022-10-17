import React from "react";
import Categories from "./Categories.jsx";

const Gameboard = (props) => {
  return (
    <div
      data-testid="gameboard"
      id={props.currentQuestion.question ? "question" : "gameboard"}
    >
      <Categories id={"gameboard"}  allCategories={props.currentQuestion} />

    </div>


  );
};

export default Gameboard;

// /*/*was a question clicked?  */*/}
// {/*/*Yes? Show clue */*/}
//   {/*/*No? Show Categories */*/}