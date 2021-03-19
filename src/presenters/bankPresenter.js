import { CardView, BoardView, BankView } from "../views"

export default function BankPresenter(props) {


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


    return (
        <BankView
            addBoard={(name) => { props.model.banks[props.model.currentBank].addBoard(name) }}>
            {boardViews}
        </BankView>
    )

}