import React from 'react';

export default function useCardProp(model, boardID, cardID, property) {  // custom hook
    const banks = model.banks;
    const currentBank = model.currentBank;

    var bank = banks.filter(b => {
        return b.bankID === currentBank;
      })[0]

    const boards = bank.boards;
    
    var board = boards.filter(b => {
        return b.boardID === boardID;
      })[0]

    const card = board.cards.filter(b => {
        return b.cardID === cardID;
      })[0]

    const [value, setValue] = React.useState(card[property]);

    React.useEffect(function () {
        function obs() {
            setValue(card[property])
        }
        model.addModelObserver(obs);
        return function () { model.removeModelObserver(obs); }
    }, [card[property]]);
    // though model never changes 
    return value;
}
