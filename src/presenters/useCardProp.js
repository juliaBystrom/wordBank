import React from "react";


export default function useCardProp(model, boardId, cardID, property) {  // custom hook
    const banks = model.banks;
    const activeBankId = model.activeBankId;

  var bank = banks.filter((bank) => {
    return bank.id === activeBankId;
  })[0];

  const boards = bank.boards;
  var board = boards.filter((board) => {
    return board.id === boardID;
  })[0];

  const card = board.cards.filter((card) => {
    return card.id === cardID;
  })[0];

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
  // though model never changes
  return value;
}
