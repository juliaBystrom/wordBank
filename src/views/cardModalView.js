import Modal from "react-modal";
import React from "react";
import styled from "styled-components";
import editSymbolPath from "../images/editSymbol.svg";

/*
    CardModalView
    Popup with edidable info about card
    Uses react-modal, read more about it: http://reactcommunity.org/react-modal/

*/


import {
  TagInput,
  StyledCloseButton,
  EditButton,
  TextBoxDynamic,
  Card,
  TranslationWrapper,
  Translation,
  ModelHeader,
  CardBarWrapper,
  InputTitle,
  PhraseText,
} from "../styledComponents";
import {} from "../styledComponents";

Modal.setAppElement(document.getElementById("root"));

export default function CardModalView(props) {

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Card info"
      style={getStyle("#36333b", "#F7F4EA")}
    >
      <ModalWrapper>
        <ModelHeader>
          <CardBarWrapper>
            <Card>
              <TranslationWrapper>
                <Translation isTranslateFrom={true}>
                  {props.editTranslationMode ? (
                    <TextBoxDynamic
                      value={props.phrase}
                      onChange={(event) =>
                        props.changePhrase(event.target.value)
                      }
                    />
                  ) : (
                    <PhraseText>{props.phrase}</PhraseText>
                  )}
                </Translation>
                <Translation isTranslateFrom={false}>
                  {props.editTranslationMode ? (
                    <TextBoxDynamic
                      value={props.translation}
                      onChange={(event) =>
                        props.changeTranslation(event.target.value)
                      }
                    />
                  ) : (
                    <PhraseText>{props.translation}</PhraseText>
                  )}
                </Translation>
              </TranslationWrapper>
            </Card>

            {props.editTranslationMode ? (
              <EditButton onClick={props.closeEditTranslation}>
                Close
                <img
                  src={editSymbolPath}
                  alt="Edit button"
                  width="30"
                  height="30"
                />
              </EditButton>
            ) : (
              <EditButton onClick={props.startEditTranslation}>
                Open
                <img
                  src={editSymbolPath}
                  alt="Edit button"
                  width="30"
                  height="30"
                />
              </EditButton>
            )}
          </CardBarWrapper>

          <StyledCloseButton onClick={props.closeModal}>
            <div>
              <div />
              <div />
            </div>
          </StyledCloseButton>
        </ModelHeader>

        <form>
          <label>
            <InputTitle>Comment</InputTitle>

            <TextBoxDynamic

              value={props.comment}
              onChange={(event) => props.setComment(event.target.value)}
            />
          </label>
          <label>
            <InputTitle>Tag</InputTitle>
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
            <option value={Number(opt.id)} label={opt.tag} key={opt.id}></option>
          ))}
        </datalist>
      </ModalWrapper>
    </Modal>
  );
}

function getStyle(darkBorder, bgColor) {
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
      backgroundColor: `${bgColor}`,
    },
    overlay: {
      // TO DO: Do we want another bluring background colour?
    },
  };
  return customModalStyle;
}

export const ModalWrapper = styled.div`

  width: 60vw;
  min-width: 250px;
  // min-width: ${props => props.theme.mobile};
`;