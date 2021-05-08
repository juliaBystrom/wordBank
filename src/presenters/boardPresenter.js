import React from "react";
import { BoardView } from "../views";

import useBoardProp from "./useBoardProp";

import CardPresenter from "./cardPresenter";


/*
    BoardPresenter 


*/

export default function BoardPresenter(props) {
  // Using boardIndex to accses the right board element in the model
  // const board = useModelSubSubclassProperty(props.model, "banks", props.model.activeBankId, "boards", props.boardIndex);
  // const board = useBoardProp(props.model, "banks", props.model.activeBankId, "boards", props.boardIndex);
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
          props.model.editBoardTitle(title, newTitle); }}
      onDeleteBoard={(id)=>props.model.deleteBoard(id)}>
      {cardPresenterList}
    </BoardView>
  );
}
