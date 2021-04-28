import React from "react";

import styled, { css } from "styled-components";
import { DropdownComponent } from "./components";
import LanguageList from "./components/languageList";

const TranslateWrapper = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: "#55555";

  /* 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.main};
  border-radius: 3px;
  height: 50px;
  margin: 50px; 
  */
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: none;
  font-size: 16px;
  color: black;
  font-weight: 600;
  padding: 0.25em 1em;
  background-color: ${(props) => props.theme.queenblue};
  border-radius: 8px;
  height: 40px;
  width: 200px;
  margin: 2px;
  color: white;
  ${(props) =>
    props.primary &&
    css`
      background: #7cb9e8;
    `}
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  border-radius: ${(props) =>
    props.isTranslateFrom ? "5px 0px 0px 0px" : "0px 5px 0px 0px"};
  height: 10px;
  text-align: center;
  background-color: ${(props) =>
    props.isTranslateFrom ? props.theme.cambridgeblue : props.theme.purplerain};
  font-family: serif, Times;
  font-size: 20px;
  padding: 20px;
`;

const TextBox = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 258px;
  border-radius: ${(props) =>
    props.isTranslateFrom ? "0px 0px 0px 5px" : "0px 0px 5px 0px"};
  height: 100px;
  padding: 20px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 200px;
  margin: 10px;
`;

const TagInput = styled.input`
  width: 180px;
  border-radius: 8px;
  height: 20px;
  padding: 10px;
  border: 1px solid;
  font-weight: 600;
  background: white;
`;

const TranslateView = (props) => {

  return (
    <TranslateWrapper>
      <div>
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
      </div>

      <div>
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
      </div>
      {
        <ButtonContainer>
          <Button onClick={() => props.translate()}>Translate!</Button>

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
                keyExtractor={(item) => { return item.id }}

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
