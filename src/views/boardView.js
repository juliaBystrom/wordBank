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
          <EditableBoardTitle defaultValue={props.title} type="text" onChange={e => props.onEditBoardTitle(props.title, e.target.value)}>
          </EditableBoardTitle>
      </BoardTitleWrapper>

      <BoardCardWrapper>
        {props.children}
      </BoardCardWrapper>
    </BoardWrapper>
  );
}