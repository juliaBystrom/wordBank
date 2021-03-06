import Modal from "react-modal";
import React from "react";
import styled from "styled-components";
import editSymbolPath from "../images/editSymbol.svg";
import { DropdownComponent } from "./components";
import { DropdownComponentItem } from "./../styledComponents";

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
import { DeleteButton } from "../styledComponents/general";

Modal.setAppElement(document.getElementById("root"));

export default function CardModalView(props) {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Card info"
      style={getStyle("#36333b", "#FFFFFF")}
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
                Save
                <img
                  src={editSymbolPath}
                  alt="Edit button"
                  width="30"
                  height="30"
                />
              </EditButton>
            ) : (
              <EditButton onClick={props.startEditTranslation}>
                Edit
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

        <label>
          <InputTitle>Comment</InputTitle>

          <TextBoxDynamic
            disabled={props.editTranslationMode === false}
            value={props.comment}
            onChange={(event) => props.setComment(event.target.value)}
          />
        </label>
        <label>
          <InputTitle>Tag</InputTitle>
          <TagInput
            disabled={props.editTranslationMode === false}
            onChange={(event) => props.setTag(event.target.value)}
            type="text"
            name="tag"
            list="taglist"
            placeholder={props.tagText}
          ></TagInput>
        </label>

        <BoardInput>
          <DropdownComponent
            list={props.availableBoards.filter((board) => {
              return board.id !== props.boardId;
            })}
            title={"Move card to board"}
            open={props.openSelector}
            toggle={() => {
              props.toggle();
            }}
            onSelectionDone={(board) => {
              props.onMoveCard(board.id);
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </BoardInput>

        <DeleteButton
          onClick={() => {
            props.onDeleteCard();
          }}
        >
          Delete card
        </DeleteButton>

        <datalist id="taglist">
          {props.tags.map((opt) => (
            <option
              value={Number(opt.id)}
              label={opt.tag}
              key={opt.id}
            ></option>
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
      // Controlls the background of the pop up
    },
  };
  return customModalStyle;
}

export const ModalWrapper = styled.div`
  width: 60vw;
  min-width: 250px;
`;

const BoardInput = styled.div`
  box-sizing: border-box;

  ${DropdownComponentItem} {
    max-height: 200px;
    overflow-y: auto;
    width: 100%;
  }
`;
