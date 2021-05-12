import React from "react";

export default function useBoardProp(model, id, property) {
  // custom hook
  const banks = model.banks;
  const activeBankId = model.activeBankId;

  var bank = banks.filter((bank) => {
    return bank.id === activeBankId;
  })[0];

  const boards = bank.boards;
  var board = boards.filter((board) => {
    return Number(board.id) === Number(id);
  })[0];

  const [value, setValue] = React.useState(board[property]);

  React.useEffect(
    function () {
      function obs() {
        setValue(board[property]);
      }
      model.addObserver(obs);
      return function () {
        model.removeObserver(obs);
      };
    },
    [board, model, property]
  );
  // though model never changes
  return value;
}
