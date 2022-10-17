import React, { useState } from "react";

const Response = (props) => {
  const [userResponse, setUserResponse] = useState("");

  const recordResponse = (event) => {
    // Implement record response
  };

  const submitResponse = (event) => {
      event.preventDefault()
      if (props.currentQuestion.answer === props.answeredQuestions)
      {
          console.log("Correct")
          props.setScore(props.score + props.currentQuestion.value)
          props.currentQuestion.question=null;
          props.currentQuestion.value=null;

      } else{
          props.setScore(props.score - props.currentQuestion.value)
          props.currentQuestion.question=null;
          props.currentQuestion.value=null;
      }
    // this function should fire when the user fills the response and hits 'enter'
    // Is the user response correct?
    // yes/no? What should happen?
  };


  return (
    <div id="response" data-testid="response">
        <form onSubmit={(event)=>{submitResponse(event)}}>
          <input
            type="text"
            placeholder="Answers go here!"
            value={props.answeredQuestions}
            onChange={(e) => {props.setAnsweredQuestions(e.target.value)}}
            // handle data change
            // handle when 'enter' is hit
          />
        </form>
    </div>
  );
};

export default Response;
