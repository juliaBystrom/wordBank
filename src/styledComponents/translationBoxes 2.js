import styled, { css } from "styled-components";

/*
 Styled componens for wraping and boxing translations
*/

export const TranslateWrapper = styled.div`

  background-color: "#55555";
  padding: 0px auto;
  display: flex;
  flex-wrap: wrap;
  margin: 0;


`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${(props) =>
    props.isTranslateFrom ? "5px 0px 0px 0px" : "0px 5px 0px 0px"};
  text-align: center;
  background-color: ${(props) =>
    props.isTranslateFrom ? props.theme.cambridgeblue : props.theme.purplerain};
  font-size: 2em;
  padding: 10px 10px;
  box-sizing: border-box;
`;

export const TextBox = styled.textarea`
  border-radius: ${(props) =>
    props.isTranslateFrom ? "5px 0px 0px 5px" : "0px 5px 5px 0px"};
  min-height: 100px;
  max-height: 200px;
  width: auto;
  // padding: 20px;
  resize: none;
  overflow: auto;
  box-sizing: border-box;
  width: 100%;
`;

export const TextBoxDynamic = styled.textarea`

  border-radius: ${(props) =>
    props.isTranslateFrom ? "5px 0px 0px 5px" : "0px 5px 5px 0px"};
  box-sizing: border-box;
  display: inline-block;
  border-radius: "5px 5px 5px 5px";
  min-height: 100px;
  padding: 10px;
  width: 100%;
  resize: none;
  

  


`;

export const TagInput = styled.input`
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid;
  padding: 10px 20px;
  font-weight: 600;
  width: 100%;
`;

export const TranslateButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  padding: 0.25em 1em;
  background-color: ${(props) => props.theme.queenblue};
  border-radius: 8px;
  padding: 10px 20px;
  height: 40px;
  color: white;
  ${(props) =>
    props.primary &&
    css`
      background: #7cb9e8;
    `}
`;
