import styled from "styled-components";

/*
Wrapper div for the bank View
*/
export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px;
  background-color: ${(props) => props.theme.alabaster};
  border: 2px ${(props) => (props.theme.showTestBorders ? "solid" : "hidden")}
    ${(props) => props.theme.testBorder};
  border-radius: 10px;
  // flex growFactor shrinkFactor basisWidth
  flex: 0.2 0.2 300px;
  min-width: 250px;
 
`;

export const BoardTitleWrapper = styled.div`
  background-color: ${(props) => props.theme.alabaster};
  margin-bottom: 10px;
  border: 2px ${(props) => (props.theme.showTestBorders ? "solid" : "hidden")}
    ${(props) => props.theme.testBorder};
  border-radius: 5px 5px 0px 0px; /* top left, top right, bottom right, bottom left */
`;

export const BoardCardWrapper = styled.div`
  background-color: ${(props) => props.theme.alabaster};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px ${(props) => (props.theme.showTestBorders ? "solid" : "hidden")}
    ${(props) => props.theme.testBorder};
  overflow-y: auto;
  flex: 1 0 80%;
`;
