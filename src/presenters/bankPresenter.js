import React, { useEffect } from "react";
import { loadBankFromFirebase } from "../loadFromFirebase";
import BoardPresenter from "./boardPresenter";
import BoardsWrapperPresenter from "./boardsWrapperPresenter";
import useBankProp from "./useBankProp";
<<<<<<< HEAD
import useModelProp from "./useModelProp";
=======
>>>>>>> master

/*
BankPresenter manages:
  - boardWrapperPresenter
  - boardpresenters (one presenter for every board)

  Note: Might be moved to an presenter also managing login. 

*/

export default function BankPresenter(props) {
  const boards = useBankProp(props.model, "boards");

  useEffect(() => {}, [props.model]);

<<<<<<< HEAD
  // Index is used because baords are stored as an array in the model. 
=======
  // Index is used because baords are stored as an array in the model.
>>>>>>> master
  // TODO: When index changing oimplementation is done test that reredering is correct
  const boardPresenters = boards.map((board, index) => {
    return (
      <BoardPresenter
        model={props.model}
        boardIndex={index}
        key={board.id}
        id={board.id}
        title={board.title}
      />
    );
  });

  return <BoardsWrapperPresenter model={props.model}>{boardPresenters}</BoardsWrapperPresenter>;
}
