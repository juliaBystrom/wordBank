import React from "react";
import { BoardWrapper, BoardTitleWrapper, BoardCardWrapper,BoardTitle } from "../styledComponents"
import { EditableBoardTitle } from "../styledComponents/general";

export default function BoardView(props) {

  return (
    <BoardWrapper>
      <BoardTitleWrapper>
        {/* <BoardTitle>
          {props.title}
        </BoardTitle> */}
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
      </BoardCardWrapper>
    </BoardWrapper>
  );
}