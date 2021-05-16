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
    <BoardsWrapperPresenter model={props.model}>
      {boardPresenters}
    </BoardsWrapperPresenter>
  );
}
