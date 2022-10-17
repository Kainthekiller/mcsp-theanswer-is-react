import React, {useEffect, useState} from "react";
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
  const [clueHolder, setClueHolder] = useState([])

  //Custom Methods --------------------
function getAllClues() {
        fetch("http://jservice.io/api/clues")
            .then(responseNonJSON => {
                return responseNonJSON.json();
            })
            .then((responseIsJSON)=> {
                console.log(responseIsJSON);
                setClueHolder(responseIsJSON)


                let myBigArray = responseIsJSON;
                console.log(myBigArray[2].question)

            })
    }
    useEffect( () => {
        getAllClues();

    }, [])

  //Main Start ---------------------------
  return (
    <div id={"app"}>


      {/* Gameboard */}
      <Gameboard   categories={categories}  setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
      {/*  pass another parm,  */}
      {/* Scoreboard */}
      <Scoreboard score={score}/>

      {/* Response */}
        <Response setAnsweredQuestions={setAnsweredQuestions} answeredQuestions={answeredQuestions}  currentQuestion={currentQuestion} setScore={setScore} score={score}/>
    </div>

  );
};

export default App;
