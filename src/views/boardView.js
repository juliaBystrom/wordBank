import React from "react";
import {
  BoardWrapper,
  BoardTitleWrapper,
  BoardCardWrapper,
} from "../styledComponents";
import { EditableBoardTitle, DeleteButton } from "../styledComponents/general";

export default function BoardView(props) {
  return (
    <BoardWrapper>
      <BoardTitleWrapper>
        <EditableBoardTitle
          type="text"
          defaultValue={props.title}
          onInput={(e) => {
            props.onEditBoardTitle(e.target.value);
          }}
        ></EditableBoardTitle>
        {props.displayMessage}
      </BoardTitleWrapper>

      <BoardCardWrapper>
        {props.children}
        <DeleteButton
          onClick={() => {
            props.onDeleteBoard();
          }}
        >
          Delete board
        </DeleteButton>
      </BoardCardWrapper>
    </BoardWrapper>
  );
}
