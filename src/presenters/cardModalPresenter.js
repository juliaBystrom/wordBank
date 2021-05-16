import React, { useState } from "react";
import { CardModalView } from "../views";
import useCardProp from "./useCardProp";

/*
    CardModalPresenter
    Presents the information to the popup

*/

export default function CardModalPresenter(props) {
  // Used to controll the tags of the card
  // const tags = useBankProp(props.model, "tags");
  const tags = props.model.banks[props.model.activeBankId].tags;
  const boards = props.model.banks[props.model.activeBankId].boards;

  /*   console.log("Tags in card modal presenter:")
  console.log(tags) */

  const [editTranslation, setEditTranslation] = React.useState(false);

  const [phrase, setPhrase] = React.useState(props.card.leftSentence);
  const [translation, setTranslation] = React.useState(
    props.card.rightSentence
  );

  const [tagText, setTagText] = React.useState(props.card.tag);
  if (!tagText) {
    console.log("Sets tag text to no tag");
    setTagText("no tag");
  }

  // TO DO get comment without using this
  const prevComment = useCardProp(
    props.model,
    props.boardId,
    props.card.id,
    "comment"
  );

  const [comment, setComment] = React.useState(prevComment);

  const [openBoard, setOpenBoard] = useState(false);

  return (
    <>
      <CardModalView
        modalIsOpen={props.modalIsOpen}
        closeModal={props.closeModal}
        phrase={phrase}
        translation={translation}
        tags={tags}
        tagText={tagText}
        onMoveCard={(newBoardId) => {
          props.model.moveCard(props.card, props.boardId, newBoardId);
        }}
        onDeleteCard={() => {
          props.model.deleteCard(props.card.id, props.boardId);
        }}
        setTag={(newTag) => {
          setTagText(newTag);
          props.model.setCardNewTag(newTag, props.card.id, props.boardId);
        }}
        comment={comment}
        setComment={(newComment) => {
          setComment(newComment);
          // TO DO update comment in model
          props.model.setCardComment(newComment, props.card.id, props.boardId);
        }}
        changePhrase={(newPhrase) => {
          console.log("change phrase");
          console.log(newPhrase);
          console.log("editTranslation");
          console.log(editTranslation);
          setPhrase(newPhrase);
          props.model.setCardLeftSentence(
            newPhrase,
            props.card.id,
            props.boardId
          );
        }}
        changeTranslation={(newPhrase) => {
          console.log("change translation");
          console.log(newPhrase);
          console.log("editTranslation");
          console.log(editTranslation);
          setTranslation(newPhrase);
          props.model.setCardRightSentence(
            newPhrase,
            props.card.id,
            props.boardId
          );
        }}
        startEditTranslation={() => {
          console.log("edit translation");
          setEditTranslation(true);
        }}
        closeEditTranslation={() => {
          console.log("close edit translation");
          setEditTranslation(false);
        }}
        editTranslationMode={editTranslation}
        availableBoards={boards}
        toggle={() => setOpenBoard(!openBoard)}
        openSelector={openBoard}
        moveToBoard={(board) => {
          // Will close when selected

          setOpenBoard(!openBoard);
          props.model.moveCard(props.card.id, props.boardId, board.id);
        }}
      />
    </>
  );
}
