import React from "react";

/*
    The translation, including the expression from and the resulting translated expression.
    Used in boards

*/

import {
  Card,
  TranslationWrapper,
  Translation,
  PhraseText,
} from "../styledComponents";

export default function TranslationCardView(props) {
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
