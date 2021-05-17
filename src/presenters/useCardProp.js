import React from "react";

/*
 Custom hook handling properties from the Card class of the model.
*/

export default function useCardProp(model, boardId, cardId, property) {
  const bank = model.getActiveBank();

  const boards = bank.boards;
  var board = boards.filter((board) => {
    return board.id === boardId;
  })[0]; // [0] to eliminate array wrap

  const card = board.cards.filter((card) => {
    return card.id === cardId;
  })[0]; // [0] to eliminate array wrap

  const [value, setValue] = React.useState(card[property]);

  React.useEffect(
    function () {
      function useCardObs() {
        if (!card || !property) return;
        setValue(card[property]);
      }
      model.addObserver(useCardObs);
      return function () {
        model.removeObserver(useCardObs);
      };
    },
    [card[property]]
  );
  return value;
}
