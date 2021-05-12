import React, { useEffect } from "react";
import styled from "styled-components";
import { loadBankFromFirebase } from "../loadFromFirebase";

import BoardPresenter from "./boardPresenter";
import BoardsWrapperPresenter from "./boardsWrapperPresenter";
import useModelProp from "./useModelProp";
import useBankProp from "./useBankProp";
import { TranslateButton } from "../styledComponents";

/*
BankPresenter manages:
  - boardWrapperPresenter
  - boardpresenters (one presenter for every board)

  Note: Might be moved to an presenter also managing login. 

*/

const BackButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 10px;
  & > * {
    margin-bottom: 5px;
  }

  @media (max-width: 650px) {
    width: 100%;
    align-items: stretch;
  }
`;

export default function BankPresenter(props) {
  console.log("Bank presenter: ", props.model.banks[0].boards);

  const boards = useBankProp(props.model, "boards");
  const loggedIn = useModelProp(props.model, "loggedIn");

  // Index is used because baords are stored as an array in the model.
  const boardPresenters = boards.map((board, index) => {
    console.log("Bank presenter BOARD: ", board);
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
