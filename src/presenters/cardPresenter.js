import React from "react";
import useCardProp from "./useCardProp";
import CardModalPresenter from "./cardModalPresenter";
import TranslationCardPresenter from "./translationCardPresenter";

/*
   Card Presenter

  If the card´s field show is true then this Presenter will render:
  - TranslationCardPresenter: Displays the card
  - CardModalPresenter: If the user presses the card this Presenter will display an popup with its info


*/

export default function CardPresenter(props) {
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
        <>
          <TranslationCardPresenter
            model={props.model}
            cardId={props.cardId}
            card={props.card}
            openModal={openModal}
          />

          <CardModalPresenter
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            card={props.card}
            model={props.model}
            boardId={props.boardId}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
