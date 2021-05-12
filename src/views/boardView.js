import React from "react";
import { BoardWrapper, BoardTitleWrapper, BoardCardWrapper,BoardTitle } from "../styledComponents"
import { EditableBoardTitle, DeleteButton } from "../styledComponents/general";

export default function BoardView(props) {

  return (
    <BoardWrapper>
      <BoardTitleWrapper>
        <EditableBoardTitle 
          type="text" 
          defaultValue={props.title}
          onInput={e => {
            props.onEditBoardTitle(e.target.value);
            }}>
        </EditableBoardTitle>
        {props.displayMessage}
      </BoardTitleWrapper>

      <BoardCardWrapper>

        {props.children}
        <DeleteButton
          onClick={()=>{
            props.onDeleteBoard();
          }}>
          Delete
        </DeleteButton>
      </BoardCardWrapper>
    </BoardWrapper>
  );
}