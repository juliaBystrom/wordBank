import React from "react";
import { BoardWrapper, BoardTitleWrapper, BoardCardWrapper,BoardTitle } from "./components"

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