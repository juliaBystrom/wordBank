import React from 'react';
import useModelProp from "./useModelProp";

export default function useCardProp(model, boardId, cardId, property) {  // custom hook
    const activeBankId = useModelProp(model, "activeBankId");
    const banks = model.banks;

    var bank = banks.filter(bank => {
        return bank.id === activeBankId;
      })[0]

    const boards = bank.boards;
    
    var board = boards.filter(board => {
        return board.id === boardId;
      })[0]

    const card = board.cards.filter(card => {
        return card.id === cardId;
      })[0]

    const [value, setValue] = React.useState(card[property]);

    React.useEffect(function () {
        function obs() {
            setValue(card[property])
        }
        model.addObserver(obs);
        return function () { model.removeObserver(obs); }
    }, [card[property]]);
    // though model never changes 
    return value;
}
