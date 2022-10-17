import React, {useEffect, useState} from "react";
import Categories from "./Categories.jsx";
import Clue from "./Clue.jsx";
const Gameboard = (props) => {
  //UseState


  //Custom Method
if(!props.currentQuestion.question){
  return (
  <div  data-testid="gameboard"
        id={props.categories.question ? "question" : "gameboard"}>
    <Categories  allCategories={props.categories} setCurrentQuestion={props.setCurrentQuestion} />
  </div>
  )
} else{
  return (
    <div  data-testid="gameboard"
          id={props.categories.question ? "question" : "gameboard"}>
      <div id={'question'}>
        {props.currentQuestion.question}
      </div>
    </div>
  )
}}

export default Gameboard;

// /*/*was a question clicked?  */*/}  //yesx
// {/*/*Yes? Show clue */*/} // Show clue (Question)
//   {/*/*No? Show Categories */*/} else show cart