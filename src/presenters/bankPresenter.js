import React from "react";

import BoardPresenter from "./boardPresenter";
import BoardsWrapperPresenter from "./boardsWrapperPresenter";
import useBankProp from "./useBankProp";
import useModelProp from "./useModelProp";
import { isLoading } from "../views";

/*
BankPresenter manages:
  - boardWrapperPresenter
  - boardpresenters (one presenter for every board)


*/

export default function BankPresenter(props) {
  const boards = useBankProp(props.model, "boards");
  const loggedIn = useModelProp(props.model, "loggedIn");
  const loadingData = useModelProp(props.model, "loading");

  // Index is used because boards are stored as an array in the model.
  const boardPresenters = boards.map((board, index) => {
    return loggedIn ? (
      <BoardPresenter
        model={props.model}
        boardIndex={index}
        key={board.id}
        id={board.id}
        title={board.title}
      />
    ) : null;
  });

  return (
    /* If isLoading return true because the model is not loaded from firestore the children will not render */
    isLoading(loadingData) ||
    (loggedIn && (
      <BoardsWrapperPresenter model={props.model}>
        {boardPresenters}
      </BoardsWrapperPresenter>
    ))
  );
}
