import React from "react";

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
