import React from "react";
import { CardView } from "../views";

import useCardProp from "./useCardProp";

/*
    CardPresenter 


*/

export default function CardPresenter(props) {
    
    const showCard = useCardProp(props.model, props.boardId, props.cardId, "show");

    return (
        showCard ? <CardView
            leftSentence={props.card.leftSentence}
            rightSentence={props.card.rightSentence}
            id={props.cardId}
            key={props.cardId}
            onCardPress={(idOfCard) => console.log(`Pressed card: ${idOfCard}`)}
        /> : <div><p> NEJ SHOW</p></div>

    );


}
