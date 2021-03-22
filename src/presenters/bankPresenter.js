import React from "react";
import { CardView, BoardView, BankView, AddBoardView } from "../views"
import useModelProperty from "./useModelProperty"

export default function BankPresenter(props) {

    const [newBoardName, setNewBoardName] = React.useState("");

    const boards = useModelProperty(props.model, "banks", props.model.currentBank, "boards");

    // var boards = props.model.banks[props.model.currentBank].boards
    var boardViews = boards.map(function (board) {
        console.log("boards re render")

        var cardViews = board.cards.map(function (card) {

            return (
                <CardView
                    leftSentence={card.leftSentence}
                    rightSentence={card.rightSentence}
                    id={card.cardID}
                    key={card.cardID}
                    onCardPress={(idOfCard) => console.log(`Pressed card: ${idOfCard}`)}
                />)

        });

        return (

            <BoardView title={board.title} key={board.boardID}>
                {cardViews}
            </BoardView>

        )
    })

 
    return (
        <BankView>

            {boardViews}
            <AddBoardView
                addBoard={() => {
                    props.model.addBoard(newBoardName)
                }}
                onBoardnameChange={(name) => {
                    setNewBoardName(name);
                }}
            />
        </BankView>
    )

}