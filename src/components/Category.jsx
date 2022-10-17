import React from "react";
import Clue from "./Clue.jsx";
const Category = (props) => {
  return (
    <div className="category" data-testid="category">
      <div className="categoryTitle">{props.singleCategory.title}</div>
      {
          /* display clues for each category */}

        <Clue Clue={props.singleCategory.clues}/>
    </div>
  );
};

export default Category;
