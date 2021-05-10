import React from "react";
import { BoardView } from "../views";

import useBoardProp from "./useBoardProp";

import CardPresenter from "./cardPresenter";

/*
    BoardPresenter 


*/

export default function BoardPresenter(props) {
  const cards = useBoardProp(props.model, props.id, "cards");

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
    <BoardView title={props.title} key={props.id}>
      {cardPresenterList}
    </BoardView>
  );
}
