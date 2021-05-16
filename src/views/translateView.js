import React from "react";

import styled from "styled-components";
import { DropdownComponent } from "./components/";
import LanguageList from "./components/languageList";
import {
  TranslateWrapper,
  TitleBox,
  TextBox,
  TagInput,
  TranslateButton,
} from "../styledComponents";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 10px;
  & > * {
    margin-bottom: 5px;
  }

  @media (max-width: 650px) {
    width: 100%;
    align-items: stretch;
  }
`;

export const TranslationBox = styled.div`
  box-sizing: border-box;
  padding-left: 10px;
  min-width: 200px;
  max-width: 500px;
  flex: 1 1 30%;

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 0;
  }
`;

const TranslateView = (props) => {
  return (
    <TranslateWrapper>
      <TranslationBox>
        <form>
          <TitleBox isTranslateFrom={true}>
            <LanguageList
              language={props.fromLanguage}
              languageCodes={props.languageCodes}
              setLanguage={props.setFromLanguage}
            ></LanguageList>
          </TitleBox>

          <TextBox
            onChange={(e) => props.setPhrase(e.target.value)}
            placeholder={props.placeholder}
            isTranslateFrom={true}
          ></TextBox>
        </form>
      </TranslationBox>

      <TranslationBox>
        <TitleBox isTranslateFrom={false}>
          <LanguageList
            language={props.toLanguage}
            languageCodes={props.languageCodes}
            setLanguage={props.setToLanguage}
          ></LanguageList>
        </TitleBox>
        <TextBox
          value={props.transPhrase}
          isTranslateFrom={false}
          onChange={(e) => props.setTransPhrase(e.target.value)}
        ></TextBox>
      </TranslationBox>

      <ButtonContainer>
        <TranslateButton onClick={() => props.translate()}>
          Translate!
        </TranslateButton>

        {props.loggedIn ? (
          <>
            <TagInput
              onChange={(event) => {
                props.setTag(event.target.value);
              }}
              type="text"
              name="tag"
              list="taglist"
              placeholder="Tag your translation"
            ></TagInput>

            <DropdownComponent
              list={props.availableBoards}
              title={"Select board & save"}
              open={props.openSelector}
              toggle={() => {
                props.toggle();
              }}
              onSelectionDone={(board) => {
                props.saveToBoard(board);
              }}
              keyExtractor={(item) => {
                return item.id;
              }}
            />
          </>
        ) : (
          ""
        )}
        <datalist onChange={() => console.log("set a tag")} id="taglist">
          {props.tags.map((tag) => (
            <option key={Number(tag.id)}>{tag.name}</option>
          ))}
        </datalist>
      </ButtonContainer>
    </TranslateWrapper>
  );
};

export default TranslateView;
