import React from "react";
import { CardView, BoardView } from "../views";
import useModelSubSubclassProperty from "./useModelSubSubclassProperty";

import useBoardProp from "./useBoardProp";

/*
    BoardPresenter 


*/

export default function BoardPresenter(props) {

    // Using boardIndex to accses the right board element in the model
    // const board = useModelSubSubclassProperty(props.model, "banks", props.model.currentBank, "boards", props.boardIndex);
    // const board = useBoardProp(props.model, "banks", props.model.currentBank, "boards", props.boardIndex);
    const cards = useBoardProp(props.model, props.boardID, "cards");


    var cardViews = cards.map(function (card) {
        console.log("> Rerender BoardPresenter with cardViews")

        return card.show ? <CardView
            leftSentence={card.leftSentence}
            rightSentence={card.rightSentence}
            id={card.cardID}
            key={card.cardID}
            onCardPress={(idOfCard) => console.log(`Pressed card: ${idOfCard}`)}
        /> : <div></div>;

    });

    return (
        <BoardView title={props.title} key={props.boardID}>
            {cardViews}
        </BoardView>
    );


}
