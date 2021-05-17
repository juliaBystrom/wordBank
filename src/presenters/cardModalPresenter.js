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
    
    setTagText("no tag");
  }


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
        boardId={props.boardId}
        onMoveCard={(newBoardId) => {
          props.model.moveCard(props.card, props.boardId, newBoardId);
        }}
        onDeleteCard={() => {
          props.model.deleteCard(props.card.id, props.boardId);
        }}
        setTag={(newTag) => {
          setTagText(newTag);
        }}
        comment={comment}
        setComment={(newComment) => {
          setComment(newComment);
        }}
        changePhrase={(newPhrase) => {
          
          
          
          
          setPhrase(newPhrase);
          props.model.setCardLeftSentence(
            newPhrase,
            props.card.id,
            props.boardId
          );
        }}
        changeTranslation={(newPhrase) => {
          
          
          
          
          setTranslation(newPhrase);
          props.model.setCardRightSentence(
            newPhrase,
            props.card.id,
            props.boardId
          );
        }}
        startEditTranslation={() => {
          
          setEditTranslation(true);
        }}
        closeEditTranslation={() => {
          
          setEditTranslation(false);
          props.model.setCardNewTag(tagText, props.card.id, props.boardId);
          props.model.setCardComment(comment, props.card.id, props.boardId);
          
        }}
        editTranslationMode={editTranslation}
        availableBoards={boards}
        toggle={() => {
          if(boards.length > 1){
            setOpenBoard(!openBoard);
          } else {
            alert("You only have one board so far. Create more to move cards!");
          }
        }}

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
