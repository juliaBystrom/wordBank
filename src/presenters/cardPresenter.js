import React from "react";
import { CardView, CardInfoView } from "../views";
import useCardProp from "./useCardProp";
import CardInfoPresenter from "./cardInfoPresenter";
import Modal from 'react-modal';

/*
    CardPresenter 

*/




export default function CardPresenter(props) {

    const showCard = useCardProp(props.model, props.boardID, props.cardID, "show");


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
            {showCard ? <CardView
                leftSentence={props.card.leftSentence}
                rightSentence={props.card.rightSentence}
                id={props.card.cardID}
                key={props.card.cardID}
                /*  onCardPress={(idOfCard) => {
                     console.log(`Pressed card: ${idOfCard}`);
                     openModal();
                 }} */
                onCardPress={openModal}
            /> : <div><p> NEJ SHOW</p></div>}
            <CardInfoPresenter modalIsOpen={modalIsOpen} closeModal={closeModal} card={props.card} model={props.model} />
        </>

    );


}
