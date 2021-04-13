import Modal from 'react-modal';

import React from "react";
import styled from "styled-components";


/*
    CardInfoView
    Popup with edidable info about card

*/

import { DropdownComponent } from "./components";


Modal.setAppElement(document.getElementById('root'));

export default function CardInfoView(props) {

    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            contentLabel="Card info">
            <div>
                <button onClick={props.closeModal}>close</button>
                <p>{props.card.leftSentence}</p>
                <p>{props.card.rightSentence}</p>
                <form>

                    <input />
                </form>
                <DropdownComponent
                    list={props.tags}
                    title={props.card.tag}
                    open={props.openSelector}
                    toggle={() => props.toggleTaglist()}
                    onSelectionDone={(event) => props.setTag(event.target.value)}
                    keyExtractor={(item) => { return item.id }}
                />
            </div>




        </Modal>

    );
}