import React, { useState } from "react";
import data from "../testdata.js";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx";

// TODO Displays GAMEBOARD (use testdata.js)
// TODO Includes CATEGORIES (with correct info), each displays CATEGORY
// TODO CATEGORY by default should list CLUES with their $ value


const App = () => {
  //Use State ----------------
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);

  //Custom Methods --------------------


  //Main Start ---------------------------
  return (
    <div id={"app"}>


      {/* Gameboard */}
      <Gameboard   currentQuestion={categories}/>
      {/*  pass another parm,  */}
      {/* Scoreboard */}
      <Scoreboard score={score}/>
      {/* Response */}
        <Response />
    </div>
  );
};

export default App;
