import React from "react";
import { TranslationCardView, CardInfoView } from "../views";
import useCardProp from "./useCardProp";
import CardInfoPresenter from "./cardModalPresenter";
import Modal from "react-modal";

/*
    TranslationCardPresenter 

*/

export default function TranslationCardPresenter(props) {


  return (
    <TranslationCardView
      leftSentence={props.card.leftSentence}
      rightSentence={props.card.rightSentence}
      id={props.card.cardID}
      key={props.card.cardID}
      onCardPress={props.openModal}
      /*  onCardPress={(idOfCard) => {
                     console.log(`Pressed card: ${idOfCard}`);
                     openModal();
                 }} */
    />
  );
}
