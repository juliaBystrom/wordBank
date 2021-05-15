import React from "react";
import styled from "styled-components";
import {
  BoardWrapper,
  BoardTitleWrapper,
  BoardCardWrapper,
  BoardTitle,
  BoardNameInput,
  RoundButton,
} from "../styledComponents";

const ButtonWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px ${(props) => (props.theme.showTestBorders ? "solid" : "hidden")}
    ${(props) => props.theme.testBorder};
`;

export default function AddBoardView(props) {
  return (
    <BoardWrapper>
      <BoardTitleWrapper>
        <BoardTitle>
          <BoardNameInput
            value={props.value}
            placeholder="Board name"
            type="text"
            onChange={(e) => props.onBoardnameChange(e.target.value)}
          />
        </BoardTitle>
      </BoardTitleWrapper>

      <BoardCardWrapper>
        <ButtonWrapper>
          <RoundButton onClick={() => props.addBoard()}>+</RoundButton>
        </ButtonWrapper>
      </BoardCardWrapper>
    </BoardWrapper>
  );
}
