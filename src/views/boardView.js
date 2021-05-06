import React from "react";
import { BoardWrapper, BoardTitleWrapper, BoardCardWrapper,BoardTitle } from "../styledComponents"

export default function BoardView(props) {

  return (
    <BoardWrapper>
      <BoardTitleWrapper>
        <BoardTitle>{props.title}</BoardTitle>
      </BoardTitleWrapper>

      <BoardCardWrapper>
        {props.children}
      </BoardCardWrapper>
    </BoardWrapper>
  );
}