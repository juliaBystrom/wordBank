import React from "react";
import { CardView, BoardView, BankView, AddBoardView } from "../views"
import useModelSubclassProperty from "./useModelSubclassProperty"

export default function BankPresenter(props) {

    const [newBoardName, setNewBoardName] = React.useState("");

    const boards = useModelSubclassProperty(props.model, "banks", props.model.currentBank, "boards");

    var boardViews = boards.map(function (board) {

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
                value={newBoardName}
                addBoard={() => {
                    props.model.addBoard(newBoardName);
                    setNewBoardName("");
                }}
                onBoardnameChange={(name) => {
                    setNewBoardName(name);
                }}
            />
        </BankView>
    )

}