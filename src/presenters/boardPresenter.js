import React from "react";
import { CardView, BoardView } from "../views";

import useBoardProp from "./useBoardProp";
import useCardProp from "./useCardProp";

import CardPresenter from "./cardPresenter";

/*
    BoardPresenter 


*/

export default function BoardPresenter(props) {
  // Using boardIndex to accses the right board element in the model
  // const board = useModelSubSubclassProperty(props.model, "banks", props.model.activeBankId, "boards", props.boardIndex);
  // const board = useBoardProp(props.model, "banks", props.model.activeBankId, "boards", props.boardIndex);
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
    <BoardView 
      title={props.title} 
      key={props.id}
      onEditBoardTitle={(title) => {
          props.model.editBoardTitle(title); }}>
      {cardPresenterList}
    </BoardView>
  );
}
