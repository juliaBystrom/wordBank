import React from "react";
import styled from "styled-components";

const BankWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
  border: 2px ${props => (props.theme.showTestBorders ? "solid" : "hidden")} ${props => props.theme.testBorder};
  height: 400px;
  overflow-x: scroll;
  overflow-y: scroll;
  margin: 10px;
`;

export default function BankView(props) {
  
  return (
    <BankWrapper>
      {props.children}
    </BankWrapper>
  );
}