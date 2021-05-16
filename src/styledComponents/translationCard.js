import styled from "styled-components";

/*
    Styled componets for translation card
*/

/*
Usage notes:
    The Card component gives the style of the component. It can be combinated with the Translation component
    however if span is the other component then the margin area of Translation will also be preasable. So dont do that. 
*/

export const Card = styled.div`
  margin: 2px;
  padding: 2px;
  width: 95%;
  cursor: pointer;
`;

export const TranslationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Translation = styled.div`
  background-color: ${(props) =>
    props.isTranslateFrom ? props.theme.cambridgeblue : props.theme.purplerain};
  padding: 2px;
  margin: ${(props) =>
    props.isTranslateFrom ? "0px 0px 0px 10px" : "0px 10px 0px 0px"};
  color: ${(props) => props.theme.darkText};
  box-shadow: 0px 0px 7px #c4c2c2;
  width: 50%;
  max-height: 100px;
  overflow: auto;
  border-radius: ${(props) =>
    props.isTranslateFrom
      ? "5px 0px 0px 5px"
      : "0px 5px 5px 0px"}; /* top left, top right, bottom right, bottom left */
`;
export const PhraseText = styled.p`
  text-align: center;
  font-size: 1em;
`;
