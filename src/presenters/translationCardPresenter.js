import React from "react";
import { TranslationCardView, CardInfoView } from "../views";
import useCardProp from "./useCardProp";
import CardInfoPresenter from "./cardModalPresenter";
import Modal from "react-modal";


/*
    TranslationCardPresenter 

*/

export default function TranslationCardPresenter(props) {
  const showCard = useCardProp(
    props.model,
    props.boardId,
    props.cardId,
    "show"
  );

  // State and funcitos for handeling card info popup
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {showCard ? (
        <TranslationCardView
          leftSentence={props.card.leftSentence}
          rightSentence={props.card.rightSentence}
          id={props.card.cardID}
          key={props.card.cardID}
          /*  onCardPress={(idOfCard) => {
                     console.log(`Pressed card: ${idOfCard}`);
                     openModal();
                 }} */
          onCardPress={openModal}
        />
      ) : (
        <div>

        </div>
      )}
      <CardInfoPresenter
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        card={props.card}
        model={props.model}
        boardId={props.boardId}
      />
    </>
  );
}
