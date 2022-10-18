import React, {useEffect, useState} from "react";
import data from "../testdata.js";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx";
import Category from "./Category.jsx";


// TODO Displays GAMEBOARD (use testdata.js)
// TODO Includes CATEGORIES (with correct info), each displays CATEGORY
// TODO CATEGORY by default should list CLUES with their $ value



const App = () => {
    let smallArray = [10];
    let finalArray = [30];
    let count = 0;
    //Use State ----------------
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [clueHolder, setClueHolder] = useState([])

  //Custom Methods --------------------
function getAllClues() {
    for (let i = 4; i < 9; i++) {


        fetch(`http://jservice.io/api/category/?id=${i}`)
            .then(responseNonJSON => {
                return responseNonJSON.json();
            })
            .then((responseIsJSON) => {


                let myBigArray = responseIsJSON;
                    for (let k = 0; k < 6; k++) {
                        if (k === 0)
                        {
                            smallArray[k] = myBigArray.title
                            finalArray[count] = smallArray[k];
                        }
                        else
                        {
                            smallArray[k] = myBigArray.clues[k]
                            finalArray[count] = smallArray[k];
                        }

                        count++
                    }


                // }


              //  console.log(myBigArray)
                //console.log(smallArray)



                console.log(finalArray)
            })


    }

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
