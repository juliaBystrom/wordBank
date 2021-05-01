import styled, { css } from "styled-components";


/*
 Styled componens for wraping and boxing translations
*/

export const TranslateWrapper = styled.div`
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


export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  border-radius: ${props => (props.isTranslateFrom ? "5px 0px 0px 5px" : "0px 5px 5px 0px")};
  height: 10px;
  text-align: center;
  background-color: ${props => (props.isTranslateFrom ? props.theme.cambridgeblue : props.theme.purplerain)};
  font-family: serif, Times;
  font-size: 20px;
  padding: 20px;
`;

export const TextBox = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  border-radius: ${props => (props.isTranslateFrom ? "5px 0px 0px 5px" : "0px 5px 5px 0px")};
  height: 100px;
  padding: 20px;
  resize: none;
`;

export const TextBoxDynamic = styled.textarea`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  // width: 256px;
  // border-radius: ${props => (props.isTranslateFrom ? "5px 0px 0px 5px" : "0px 5px 5px 0px")};
  box-sizing: border-box;
  display: inline-block;
  border-radius: "5px 5px 5px 5px";
  min-height: 100px;
  padding: 10px;
  width: 100%;
  resize: none;
`;

export const TagInput = styled.input`
  width: 180px;
  border-radius: 8px;
  height: 20px;
  padding: 10px;
  border: 1px solid;
  font-weight: 600;
`;

export const TranslateButton = styled.button`
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