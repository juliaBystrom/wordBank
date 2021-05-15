import React from "react";

import BoardPresenter from "./boardPresenter";
import BoardsWrapperPresenter from "./boardsWrapperPresenter";
import useBankProp from "./useBankProp";

/*
BankPresenter manages:
  - boardWrapperPresenter
  - boardpresenters (one presenter for every board)

  Note: Might be moved to an presenter also managing login. 

*/

export default function BankPresenter(props) {
  const boards = useBankProp(props.model, "boards");

  // Index is used because boards are stored as an array in the model.
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

  return (
    <BoardsWrapperPresenter model={props.model} loading={props.loading}>
      {boardPresenters}
    </BoardsWrapperPresenter>
  );
}
