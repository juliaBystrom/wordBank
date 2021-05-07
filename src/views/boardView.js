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
          <EditableBoardTitle value={props.title}  placeholder={props.title} type="text" onChange={e => props.onEditBoardTitle(e.target.value)} />
      </BoardTitleWrapper>

      <BoardCardWrapper>
        {props.children}
      </BoardCardWrapper>
    </BoardWrapper>
  );
}