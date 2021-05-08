import React from "react";
import BoardPresenter from "./boardPresenter";
import BoardsWrapperPresenter from "./boardsWrapperPresenter";
import useModelProp from "./useModelProp";
import useBankProp from "./useBankProp";

/*
BankPresenter manages:
  - boardWrapperPresenter
  - boardpresenters (one presenter for every board)

  Note: Might be moved to an presenter also managing login. 

*/

export default function BankPresenter(props) {
  const boards = useBankProp(props.model, "boards");
  let loggedIn = useModelProp(props.model, "loggedIn");
  // Index is used because baords are stored as an array in the model.
  // TODO: When index changing oimplementation is done test that reredering is correct
  const boardPresenters = boards.map((board, index) => {
    if (!loggedIn) return <div>nothing</div>;
    else {
      return (
        <BoardPresenter
          model={props.model}
          boardIndex={index}
          key={board.id}
          id={board.id}
          title={board.title}
        />
      );
    }
  });

  return props.loading ? (
    <img className="spinner" alt="loading spinner" src={"http://www.csc.kth.se/~cristi/loading.gif"}></img>
  ) : (
    <BoardsWrapperPresenter model={props.model}>
      {boardPresenters}
    </BoardsWrapperPresenter>
  );
}
