import React from "react";
import { TranslationCardView } from "../views";


/*
  Presents TranslationCardView

*/

export default function TranslationCardPresenter(props) {
  return (
    <TranslationCardView
      leftSentence={props.card.leftSentence}
      rightSentence={props.card.rightSentence}
      id={props.card.cardID}
      key={props.card.cardID}
      onCardPress={props.openModal}

    />
  );
}
