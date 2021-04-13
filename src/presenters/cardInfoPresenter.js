import React, { useState, useEffect } from "react";
import { CardInfoView } from "../views";
import useCardProp from "./useCardProp";

import Modal from 'react-modal';
import useBankProp from "./useBankProp";


/*
    Card Info Presenter 
    Presents the information to the popup

*/




export default function CardInfoPresenter(props) {



    // Used to controll the dropdown of options for card
    const [tagDropdownOpen, setTagDropdownOpen] = useState(false);
    const [tag, setTag] = React.useState("");
    const tags = useBankProp(props.model, "tags");




    return (
        <>
            <CardInfoView
                modalIsOpen={props.modalIsOpen}
                closeModal={props.closeModal}
                card={props.card}
                tags={tags}
                toggleTaglist={() => setTagDropdownOpen(!tagDropdownOpen)}
                setTag={(newTag) => {
                    setTag(newTag);
                }} tags={tags} />
        </>

    );


}
