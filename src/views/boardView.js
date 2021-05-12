import React from "react";
import { BoardWrapper, BoardTitleWrapper, BoardCardWrapper,BoardTitle } from "../styledComponents"
import { EditableBoardTitle, DeleteBoard } from "../styledComponents/general";

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
        <DeleteBoard
          onClick={(e)=>{
            console.log("-----> id: ", props.id);
            props.onDeleteBoard(props.id);
          }}>
          Delete
        </DeleteBoard>
      </BoardCardWrapper>
    </BoardWrapper>
  );
}