import React from "react";
import styled from "styled-components";

/*
    CardView
    Used in boards

*/

import {
  Card,
  TranslationWrapper,
  Translation,
  PhraseText,
} from "./components";

export default function CardView(props) {
  return (
    <Card>
      <span
        key={props.id}
        onClick={() => {
          props.onCardPress();
          console.log("Pressed card");
        }}
      >
        <TranslationWrapper>
          <Translation isTranslateFrom={true}>
            <PhraseText>{props.leftSentence}</PhraseText>
          </Translation>
          <Translation isTranslateFrom={false}>
            <PhraseText>{props.rightSentence}</PhraseText>
          </Translation>
        </TranslationWrapper>
      </span>
    </Card>
  );
}
