import React from "react";
import styled from "styled-components";

/*
Usage notes:
    The Card component gives the style of the component. It can be combinated with the Translation component
    however if span is the other component then the margin area of Translation will also be preasable. So dont do that. 
*/

const Card = styled.div`
    margin: 2px;
    padding: 2px;
`;

const TranslationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   
`;

const Translation = styled.div`
    background-color: ${props => (props.isTranslateFrom ? props.theme.fromLanguage : props.theme.toLanguage)};
    padding: 10px;
    color: ${props => props.theme.darkText};
    text-align: center;
    font-size: 1em;
    // flex: 0 0 50px;
    width: 50%;
    border-radius: ${props => (props.isTranslateFrom ? "5px 0px 0px 5px" : "0px 5px 5px 0px" )}; /* top left, top right, bottom right, bottom left */
    
`;



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