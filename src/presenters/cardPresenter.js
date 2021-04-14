import React from "react";
import { CardView } from "../views";

import useCardProp from "./useCardProp";

/*
    CardPresenter 


*/

export default function CardPresenter(props) {
    
    const showCard = useCardProp(props.model, props.id, props.id, "show");

    return (
        showCard ? <CardView
            leftSentence={props.card.leftSentence}
            rightSentence={props.card.rightSentence}
            id={props.card.id}
            key={props.card.id}
            onCardPress={(idOfCard) => console.log(`Pressed card: ${idOfCard}`)}
        /> : <div><p> NEJ SHOW</p></div>

    );


}
