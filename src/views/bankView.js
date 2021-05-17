import React from "react";
import styled from "styled-components";

const BankWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.appbackground};
  border: 2px ${(props) => (props.theme.showTestBorders ? "solid" : "hidden")}
    ${(props) => props.theme.testBorder};
  height: 400px;
  width: 88%;
  overflow-x: auto;
  overflow-y: auto;
  margin: 10px 5px;
`;

export default function BankView(props) {
  return <BankWrapper>{props.children}</BankWrapper>;
}
