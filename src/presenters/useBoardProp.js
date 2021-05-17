import React from "react";

/*
 Custom hook handling properties from the Board class of the model.

*/
export default function useBoardProp(model, id, property) {
  const bank = model.getActiveBank();

  const boards = bank.boards;
  var board = boards.filter((board) => {
    return Number(board.id) === Number(id);
  })[0]; // [0] to eliminate array wrap

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
