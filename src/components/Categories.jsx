import React from "react";
import Category from "./Category.jsx";

const Categories = (props) => {
  return (
    <div id="categories" data-testid="categoryList">
      {

      }
      {/* display all the categories */}
      {props.allCategories.map(function (singleCategory){
        const {id} = singleCategory;
        return(
            <>

              <Category key={id} singleCategory={singleCategory} currentQuestion={props.currentQuestion}/>
            </>

        )
      })}

    </div>
  );
};

export default Categories;
