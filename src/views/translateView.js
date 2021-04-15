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
  border: 1px solid grey;
  border-radius: 1px;
  height: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.alabaster};
  font-family: serif, Times;
  font-size: 20px;
  padding: 20px;
`;

const TextBox = styled.textarea`
  width: 280px;
  border: 1px solid grey;
  height: 100px;
  padding: 10px;
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
`;

const TranslateView = (props) => {
  return (
    <TranslateWrapper>
      <div>
        <form onSubmit={() => console.log("translate!")}>
          <TitleBox>
            <LanguageList
              language={props.fromLanguage}
              languageCodes={props.languageCodes}
              setLanguage={props.setFromLanguage}
            ></LanguageList>
          </TitleBox>

          <TextBox
            onChange={(e) => props.setPhrase(e.target.value)}
            placeholder={props.placeholder}
          ></TextBox>
        </form>
      </div>

      <div>
        <TitleBox>
          <LanguageList
            language={props.toLanguage}
            languageCodes={props.languageCodes}
            setLanguage={props.setToLanguage}
          ></LanguageList>
        </TitleBox>
        <TextBox defaultValue={props.transPhrase}></TextBox>
      </div>
      {
        <ButtonContainer>
          <Button onClick={() => props.translate()}>Translate!</Button>

          {props.loggedIn ? (
            <span>
              <DropdownComponent
                list={props.availableBoards}
                title={"Save to"}
                open={props.openSelector}
                toggle={() => props.toggle()}
                onSelectionDone={(board) => props.saveToBoard(board)}
              />

              <TagInput
                onChange={(event) => props.setTag(event.target.value)}
                type="text"
                name="tag"
                list="taglist"
                placeholder="Tag:"
              ></TagInput>
            </span>
          ) : (
            ""
          )}
          <datalist onChange={() => console.log("set a tag")} id="taglist">
            {props.tags.map((opt) => (
              <option key={Number(opt.id)}>{opt.tag}</option>
            ))}
          </datalist>
        </ButtonContainer>
      }
    </TranslateWrapper>
  );
};

export default TranslateView;
