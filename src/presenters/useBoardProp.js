import React from 'react';

export default function useBoardProp(model, boardID, property) {  // custom hook
    const banks = model.banks
    const currentBank = model.currentBank;

    var bank = banks.filter(b => {
        return b.bankID === currentBank;
      })[0]

    const boards = bank.boards;
    var board = boards.filter(b => {
        return b.boardID === boardID;
      })[0]
    

    const [value, setValue] = React.useState(board[property]);

    React.useEffect(function () {
        function obs() {
            setValue(board[property])
        }
        model.addObserver(obs);
        return function () { model.removeObserver(obs); }
    }, [board[property]]);
    // though model never changes 
    return value;
}
