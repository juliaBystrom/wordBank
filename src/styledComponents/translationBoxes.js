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
    props.isTranslateFrom ? "5px 5px 0px 0px" : "5px 5px 0px 0px"};
  text-align: center;
  border-width: 3px;
  background-color: ${(props) => props.theme.darkblue};
  font-size: 2em;
  padding: 10px 10px;
  box-sizing: border-box;
  border-color: ${(props) => props.theme.darkblue};
`;

export const TextBox = styled.textarea`
  border-radius: ${(props) =>
    props.isTranslateFrom ? "0px 0px 5px 5px" : "0px 0px 5px 5px"};
  border-color: ${(props) => props.theme.darkblue};
  min-height: 100px;
  max-height: 200px;
  width: auto;
  // padding: 20px;
  resize: none;
  overflow: auto;
  box-sizing: border-box;
  width: 100%;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

export const TextBoxDynamic = styled.textarea`
  border-radius: ${(props) =>
    props.isTranslateFrom ? "0px 0px 5x 5px" : "0px 0px 5px 5px"};
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
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: 600;
  padding: 0.25em 1em;
  background-color: ${(props) => props.theme.button};
  border-radius: 8px;
  padding: 10px 20px;
  height: 40px;
  color: white;
  :hover {
    background-color: ${(props) => props.theme.hover};
  }
  :active {
    background-color: ${(props) => props.theme.hover};
    box-shadow: 0px 0px 2px 2px gray;
    transform: translateY(2px);
  }

  ${(props) =>
    props.primary &&
    css`
      background: #7cb9e8;
    `}
`;
