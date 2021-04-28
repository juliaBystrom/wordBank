import Modal from "react-modal";

import React from "react";
import styled from "styled-components";

/*
    CardInfoView
    Popup with edidable info about card
    Uses react-modal, read more about it: http://reactcommunity.org/react-modal/

*/

import { DropdownComponent } from "./components";
import {
  TranslateWrapper,
  TitleBox,
  TextBox,
  TagInput,
  TranslateButton,
} from "./components";
import { Card, TranslationWrapper, Translation } from "./components";

Modal.setAppElement(document.getElementById("root"));

function getStyle(darkBorder) {
  let customModalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      borderStyle: "solid",
      borderWidth: "2px",
      borderColor: `${darkBorder}`,
    },
    overlay: {
      // TO DO: Do we want another bluring background colour?
    },
  };
  return customModalStyle;
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
      style={getStyle("#36333b")}
    >
      <div>
        <button onClick={props.closeModal}>close</button>
        <Card>
          <TranslationWrapper>
            <Translation isTranslateFrom={true}>
              {props.editTranslationMode ? (
                <TextBox
                  value={props.phrase}
                  onChange={(event) => props.changePhrase(event.target.value)}
                />
              ) : (
                props.phrase
              )}
            </Translation>
            <Translation isTranslateFrom={false}>
              {props.editTranslationMode ? (
                <TextBox
                  value={props.translation}
                  onChange={(event) =>
                    props.changeTranslation(event.target.value)
                  }
                />
              ) : (
                props.translation
              )}
            </Translation>
          </TranslationWrapper>
        </Card>
        {props.editTranslationMode ? (
          <button onClick={props.closeEditTranslation}>Close edit</button>
        ) : (
          <button onClick={props.startEditTranslation}>Edit</button>
        )}

        <form>
          <label>
            Comment 
            <TextBox
              value={props.comment}
              onChange={(event) => props.setComment(event.target.value)}
            />
          </label>
                  <label>
                      Tag  
            <TagInput
              onChange={(event) => props.setTag(event.target.value)}
              type="text"
              name="tag"
              list="taglist"
              placeholder={props.tagText}
            ></TagInput>
          </label>
        </form>

        <datalist id="taglist">
          {props.tags.map((opt) => (
            <option value={Number(opt.id)} label={opt.tag}></option>
          ))}
        </datalist>
      </div>
    </Modal>
  );
}
