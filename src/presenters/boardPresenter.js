import React from "react";
import { BoardView } from "../views";

import useBoardProp from "./useBoardProp";

import CardPresenter from "./cardPresenter";

/*
  BoardPresenter handles informaiton from the board class in model
*/

export default function BoardPresenter(props) {
  const cards = useBoardProp(props.model, props.id, "cards");
  const title = useBoardProp(props.model, props.id, "title");
  const bid = useBoardProp(props.model, props.id, "id");

  var cardPresenterList = cards.map(function (card, key) {
    return (
      <CardPresenter
        model={props.model}
        boardId={props.id}
        cardId={card.id}
        card={card}
        key={key}
      />
    );
  });

  return (
    <BoardView
      title={title}
      key={props.id}
      id={bid}
      onEditBoardTitle={(newTitle) => {
        props.model.editBoardTitle(title, newTitle);
      }}
      onDeleteBoard={() => {
        if (window.confirm("Are you sure you want to delete this board?")) {
          props.model.deleteBoard(props.id);
        }
      }}
    >
      {cardPresenterList}
    </BoardView>
  );
}
