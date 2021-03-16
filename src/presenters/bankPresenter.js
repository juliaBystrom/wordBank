function SidebarPresenter(props) {


    // const number = useModelProperty(props.model, "numberOfGuests");
    // const menu = useModelProperty(props.model, "dishes");

    var boards = props.model.banks[props.model.currentBank].boards

    var boardViews = boards.map(function (board) {

        var cardViews = board.cards.map(function (card) {

            return <li>
                <CardView
                    leftSentence={card.leftSentence}
                    rightSentence={card.rightSentence}
                    id={card.cardID}
                    onCardPress={/*TODO*/}


                />
            </li>
        });

        return <BoardView title={board.title}>
            {cardViews}
        </BoardView>
    })



    return (
        <BankView
            addBoard={(name) => { props.model.banks[props.model.currentBank].addBoard(name) }}
            dishChoice={(id) => props.model.setCurrentDish(id)}>
            {boardViews}
        </BankView>
    )

}