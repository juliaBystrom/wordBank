import React from "react";
import styled from "styled-components";



const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;


  margin: 5px;
  padding: 5px;

  background-color: ${props => props.theme.secondary};
  border: 2px ${props => (props.theme.showTestBorders ? "solid" : "hidden")} ${props => props.theme.testBorder};


  // flex growFactor shrinkFactor basisWidth 
  flex: 0.2 0.2 200px;
  
`;

const BoardTitle = styled.h2`
    font-size: 1.2em;
    color: ${props => props.theme.darkText};
    text-align: center;
`;

const BoardTitleWrapper = styled.div`
  background-color: ${props => props.theme.lightBackground};
  margin-bottom: 10px;
  border: 2px ${props => (props.theme.showTestBorders ? "solid" : "hidden")} ${props => props.theme.testBorder};

  border-radius: 5px 5px 0px 0px; /* top left, top right, bottom right, bottom left */


`;

const BoardCardWrapper = styled.div`
  background-color: ${props => props.theme.lightBackground};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px ${props => (props.theme.showTestBorders ? "solid" : "hidden")} ${props => props.theme.testBorder};
  overflow-y: scroll;
  flex: 1 0 80%;



`;

export default function BoardView(props) {

  return (
    <BoardWrapper>
      <BoardTitleWrapper>
        <BoardTitle>{props.title}</BoardTitle>
      </BoardTitleWrapper>

      <BoardCardWrapper>
        {props.children}
      </BoardCardWrapper>



    </BoardWrapper>
  );
}