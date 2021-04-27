import React from "react";
import { CardView, BoardView } from "../views";
import useBoardProp from "./useBoardProp";
import CardPresenter from "./cardPresenter";

/*
    BoardPresenter 
*/

export default function BoardPresenter(props) {

    // Using boardIndex to access the right board element in the model
    // const board = useModelSubSubclassProperty(props.model, "banks", props.model.activeBankId, "boards", props.boardIndex);
    // const board = useBoardProp(props.model, "banks", props.model.activeBankId, "boards", props.boardIndex);
    const cards = useBoardProp(props.model, props.boardId, "cards");

    var cardPresenterList = cards.map(function (card) {
        return <CardPresenter model={props.model} boardId={props.boardId} cardId={card.id} card={card} key={card.id} />
    });

    return (
        <BoardView title={props.title} key={props.id}>
            {cardPresenterList}
        </BoardView>
    );
}
