import React from "react";
import { CardView, BoardView } from "../views";
import useModelSubSubclassProperty from "./useModelSubSubclassProperty";

import useBoardProp from "./useBoardProp";
import useCardProp from "./useCardProp";

import CardPresenter from "./cardPresenter";

/*
    BoardPresenter 


*/

export default function BoardPresenter(props) {

    // Using boardIndex to accses the right board element in the model
    // const board = useModelSubSubclassProperty(props.model, "banks", props.model.currentBank, "boards", props.boardIndex);
    // const board = useBoardProp(props.model, "banks", props.model.currentBank, "boards", props.boardIndex);
    const cards = useBoardProp(props.model, props.boardID, "cards");


    var cardPresenterList = cards.map(function (card) {
        console.log("> Rerender BoardPresenter with cardViews")
        return <CardPresenter model={props.model} boardID={props.boardID} cardID={card.cardID} card={card} key={card.cardID} />
    });

    return (
        <BoardView title={props.title} key={props.boardID}>
            {cardPresenterList}
        </BoardView>
    );


}
