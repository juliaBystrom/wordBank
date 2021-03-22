import React from "react";
import { CardView, BoardView, BankView, AddBoardView } from "../views"

export default function BankPresenter(props) {

    const [newBoardName, setNewBoardName] = React.useState("");


    var boards = props.model.banks[props.model.currentBank].boards
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

    boardViews = [...boardViews, <AddBoardView
        key={-1}
        addBoard={() => { props.model.banks[props.model.currentBank].addBoard(newBoardName) }}
        onBoardnameChange={(name) => {
            setNewBoardName(name);
        }}
    />
    ];


    return (
        <BankView>
            {boardViews}
        </BankView>
    )

}