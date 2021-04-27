import React, { useState, useEffect } from "react";
import { CardInfoView } from "../views";
import useCardProp from "./useCardProp";

// import Modal from 'react-modal';
import useBankProp from "./useBankProp";

/*
    Card Info Presenter 
    Presents the information to the popup

*/

export default function CardInfoPresenter(props) {
  // Used to controll the tags of the card
  const [tag, setTag] = React.useState("");
  const tags = useBankProp(props.model, "tags");

  // TO DO get comment without using this
  const prevComment = useCardProp(props.model, props.boardId, props.card.id, "comment");

  const [comment, setComment] = React.useState(prevComment);

  return (
    <>
      <CardInfoView
        modalIsOpen={props.modalIsOpen}
        closeModal={props.closeModal}
        card={props.card}
        tags={tags}
        setTag={(newTag) => {
          setTag(newTag);
          // TO DO update tag in model
        }}
        comment={comment}
        setComment={(newComment) => {
          setComment(newComment);
          // TO DO update comment in model
        }}
      />
    </>
  );
}
