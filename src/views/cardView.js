import React from "react";
import styled from "styled-components";


/*
    CardView
    Used in boards

*/

import { Card, TranslationWrapper, Translation } from "./components"

export default function CardView(props) {
    return (
        <Card>
            <span key={props.id} onClick={e => {
                props.onCardPress(props.id)
            }}>
                <TranslationWrapper>
                    <Translation isTranslateFrom={true}>
                        {props.leftSentence}
                    </Translation>
                    <Translation isTranslateFrom={false}>
                        {props.rightSentence}
                    </Translation>
                </TranslationWrapper>

            </span>
        </Card>
    );
}