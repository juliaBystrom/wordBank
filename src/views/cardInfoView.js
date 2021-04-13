import Modal from 'react-modal';

import React from "react";
import styled from "styled-components";


/*
    CardInfoView
    Popup with edidable info about card
    Uses react-modal, read more about it: http://reactcommunity.org/react-modal/

*/

import { DropdownComponent } from "./components";


Modal.setAppElement(document.getElementById('root'));



const TagInput = styled.input`
  width: 180px;
  border-radius: 8px;
  height: 20px;
  padding: 10px;
  border: none;
  font-weight: 600;
`;




const StyledModal = styled(Modal)`
    
    content: {

        position: absolute;
        background: #fff;
        overflow: auto;
        WebkitOverflowScrolling: touch;
        outline: none;
        padding: 20px;
        top: 50%;
        left: 50%;
        right: auto;
        bottom: auto;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        border: 2px solid ${props => props.theme.darkBorder};



    }

    overlay: {
        // TO DO: Do we want another bluring background colour?
    }

    
`;

function getStyle(darkBorder) {
    let customModalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderColor: `${darkBorder}`,

        },
        overlay: {
            // TO DO: Do we want another bluring background colour?
        }
    };
    return customModalStyle
}


export default function CardInfoView(props) {

    /*     const customModalStyle = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '10px',
                borderStyle: 'solid',
                borderWidth: '2px',
                borderColor: `${props => props.theme.medium}`,
    
            },
            overlay: {
                // TO DO: Do we want another bluring background colour?
            }
        }; */



    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            contentLabel="Card info"
            style={getStyle("#36333b", )}
        >
            <div>
                <button onClick={props.closeModal}>close</button>
                <p>{props.card.leftSentence}</p>
                <p>{props.card.rightSentence}</p>
                <form>
                    <label>
                        Comment
                        <textarea value={props.comment} onChange={(event) => props.setComment(event.target.value)} />

                    </label>


                </form>



                <TagInput
                    onChange={(event) => props.setTag(event.target.value)}
                    type="text"
                    name="tag"
                    list="taglist"
                    placeholder="Tag:"
                ></TagInput>

                <datalist id="taglist">
                    {props.tags.map((opt) => (
                        <option value={Number(opt.id)} label={opt.tag}></option>
                    ))}
                </datalist>
            </div>




        </Modal>

    );
}