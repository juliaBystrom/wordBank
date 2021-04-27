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
            {/*             <span key={props.id} onClick={e => {
                props.onCardPress(props.id)
            }}> */}
            <span key={props.id} onClick={() => {
                props.onCardPress();
                console.log("Pressed card");
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