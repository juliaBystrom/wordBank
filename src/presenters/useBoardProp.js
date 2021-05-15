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
      function useBoardObs() {
        if (!board || !property) return;
        setValue(board[property]);
      }
      model.addObserver(useBoardObs);
      return function () {
        model.removeObserver(useBoardObs);
      };
    },
    [board, model, property]
  );

  return value;
}
