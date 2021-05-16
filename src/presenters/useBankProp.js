import React from "react";

export default function useBankProp(model, property) {
  // custom hook

  const bank = model.banks[0];
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
