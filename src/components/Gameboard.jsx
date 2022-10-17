import React from "react";
import Categories from "./Categories.jsx";

const Gameboard = (props) => {
  return (
    <div
      data-testid="gameboard"
      id={props.categories.question ? "question" : "gameboard"}
    >

      <Categories id={"gameboard"}  allCategories={props.categories} currentQuestion={props.currentQuestion} />

    </div>


  );
};

export default Gameboard;

// /*/*was a question clicked?  */*/}  //yesx
// {/*/*Yes? Show clue */*/} // Show clue (Question)
//   {/*/*No? Show Categories */*/} else show cart