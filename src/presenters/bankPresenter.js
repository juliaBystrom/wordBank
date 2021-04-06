import React from "react";
import useModelSubclassProperty from "./useModelSubclassProperty";
import BoardPresenter from "./boardPresenter";
import BoardsWrapperPresenter from "./boardsWrapperPresenter";



/*
BankPresenter manages:
  - boardWrapperPresenter
  - boardpresenters (one presenter for every board)

  Note: Might be moved to an presenter also managing login. 

*/

export default function BankPresenter(props) {

  const boards = useModelSubclassProperty(props.model, "banks", props.model.currentBank, "boards");


  // Index is used because baords are stored as an array in the model. 
  // TODO: When index changing oimplementation is done test that reredering is correct
  const boardPresenters = boards.map((board, index) => {

    return <BoardPresenter model={props.model} boardIndex={index} key={board.boardID} />

  });

  return (
    <BoardsWrapperPresenter model={props.model}>
      {boardPresenters}
    </BoardsWrapperPresenter>
  );

}