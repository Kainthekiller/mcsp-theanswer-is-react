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

    let count = 0;
    //Use State ----------------
    const [categories, setCategories] = useState(data.categories);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [clueHolder, setClueHolder] = useState([])


    //Custom Methods --------------------
    function getAllClues() {
        let promiseArray=[];  //HOLDS ALL THE PROMISES OBJECTS
        for (let i = 4; i < 9; i++) {
   //Five Calls
                //Fetch = Object of Promises AKA new Promises()
            promiseArray.push(fetch(`http://jservice.io/api/category/?id=${i}`)
                .then(responseNonJSON => {
                    return responseNonJSON.json();
                })
                .then((responseIsJSON) => {
                    let finalArray = {title: "",id:0, clues:[] } // It's an Object
                    //DONT SAVE TO ARRAY AT ALL EVER EVER !!!!

                    let myBigArray = responseIsJSON;


                    for (let k = 0; k < 6; k++) {
                        if (k === 0)
                        {
                            smallArray[k] = myBigArray.title
                            finalArray.id = myBigArray.id;
                            finalArray.title = smallArray[k];
                        }

                        else {
                            smallArray[k] = myBigArray.clues[k]
                            finalArray.clues[k] = smallArray[k];
                        }

                        count++
                    }


                   return finalArray;
                    // console.log(categories)



                }))



        }
        //OUTSIDE OF THE BIG FOR LOOP :D
         Promise.all(promiseArray).then(arrayResult=>setCategories(arrayResult))

    }

        useEffect(() => {
            getAllClues();
        }, [])

        //Main Start ---------------------------
        return (
            <div id={"app"}>


                {/* Gameboard */}
                <Gameboard categories={categories} setCurrentQuestion={setCurrentQuestion}
                           currentQuestion={currentQuestion}/>
                {/*  pass another parm,  */}
                {/* Scoreboard */}
                <Scoreboard score={score}/>

                {/* Response */}
                <Response setAnsweredQuestions={setAnsweredQuestions} answeredQuestions={answeredQuestions}
                          currentQuestion={currentQuestion} setScore={setScore} score={score}/>
            </div>

        )

}


export default App;
