import React from "react";

/*
 Custom hook handling properties from the Bank class of the model.
*/

export default function useBankProp(model, property) {
  const bank = model.getActiveBank();
  const [value, setValue] = React.useState(bank[property]);

  React.useEffect(
    function () {
      function useBankObs() {
        if (!bank || !property) return;
        setValue(bank[property]);
      }
      model.addObserver(useBankObs);
      return function () {
        model.removeObserver(useBankObs);
      };
    },
    [model, bank, property]
  );

  return value;
}
