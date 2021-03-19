import { CardView, BoardView, BankView } from "../views"

export default function BankPresenter(props) {



    var boards = props.model.banks[props.model.currentBank].boards

    var boardViews = boards.map(function (board) {

        var cardViews = board.cards.map(function (card) {

            return <li key={card.cardID}>
                <CardView
                    leftSentence={card.leftSentence}
                    rightSentence={card.rightSentence}
                    id={card.cardID}
                // onCardPress={/*TODO*/}

                />
            </li>
        });

        return (
            <BoardView title={board.title}>
                {cardViews}
            </BoardView>
        )
    })





    return (
        <BankView
            addBoard={(name) => { props.model.banks[props.model.currentBank].addBoard(name) }}>
            {boardViews}
        </BankView>
    )

}