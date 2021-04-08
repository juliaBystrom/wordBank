import React from "react";

import styled, { css } from "styled-components";

const TranslateWrapper = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e0e0;

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
  background-color: springgreen;
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
  width: 260px;
  border: 1px solid grey;
  border-radius: 1px;
  height: 10px;
  text-align: center;
  background-color: beige;
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
  border: none;
  font-weight: 600;
`;

const TranslateView = (props) => {
  return (
    <TranslateWrapper>
      <div>
        <form onSubmit={() => console.log("translate!")}>
          <TitleBox>{props.fromLanguage}</TitleBox>

          <TextBox
            onChange={(e) => props.setText(e.target.value)}
            placeholder="Type here"
          ></TextBox>
        </form>
      </div>

      <div>
        <TitleBox></TitleBox>
        <TextBox></TextBox>
      </div>
      <ButtonContainer>
        <Button onClick={() => props.translate()}>Translate!</Button>
        <Button
          primary
          onClick={() => {
            props.createCard();
          }}
        >
          Save translation
        </Button>

        <TagInput
          onChange={(event) => props.setTag(event.target.value)}
          type="text"
          name="tag"
          list="taglist"
          placeholder="Tag:"
        ></TagInput>
        <datalist onChange={() => console.log("set a tag")} id="taglist">
          {props.tags.map((opt) => (
            <option>{opt}</option>
          ))}
        </datalist>
      </ButtonContainer>
    </TranslateWrapper>
  );
};

export default TranslateView;
