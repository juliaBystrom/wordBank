import React from "react";

import styled, { css } from "styled-components";
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
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const TranslationBox = styled.div`
  // flex-basis: 50%;
  min-width: 300px;
  flex: 1 1 30%;
  border: 4px solid purple;
`;

const TranslateView = (props) => {
  return (
    <TranslateWrapper>
      <TranslationBox>
        <form onSubmit={() => console.log("translate!")}>
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
      {
        <ButtonContainer>
          <TranslateButton onClick={() => props.translate()}>
            Translate!
          </TranslateButton>

          {props.loggedIn ? (
            <span>
              <TagInput
                onChange={(event) => props.setTag(event.target.value)}
                type="text"
                name="tag"
                list="taglist"
                placeholder="Tag:"
              ></TagInput>

              <DropdownComponent
                list={props.availableBoards}
                title={"Save to"}
                open={props.openSelector}
                toggle={() => props.toggle()}
                onSelectionDone={(board) => props.saveToBoard(board)}
                keyExtractor={(item) => {
                  return item.id;
                }}
              />
            </span>
          ) : (
            ""
          )}
          <datalist onChange={() => console.log("set a tag")} id="taglist">
            {props.tags.map((tag) => (
              <option key={Number(tag.id)}>{tag.name}</option>
            ))}
          </datalist>
        </ButtonContainer>
      }
    </TranslateWrapper>
  );
};

export default TranslateView;
