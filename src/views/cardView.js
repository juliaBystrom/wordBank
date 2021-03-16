import React from "react";


export default function CardView(props) {

    return (
        <div>
            <span key={props.id} onClick={e => {
                props.onCardPress(props.id)
            }}>
                <div>
                    <text>{props.leftSentence}</text>
                    <text>{props.rightSentence}</text>
                </div>
            </span>

        </div>
    );
}