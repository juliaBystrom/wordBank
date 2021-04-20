import React from "react";

export default function useBankProp(model, property) {
  // custom hook
  const banks = model.banks;
  const activeBankId = model.activeBankId;

  var bank = banks.filter((bank) => {
    return bank.id === activeBankId;
  })[0];

  const [value, setValue] = React.useState(bank[property]);

  React.useEffect(
    function () {
      function obs() {
        setValue(bank[property]);
      }
      model.addObserver(obs);
      return function () {
        model.removeObserver(obs);
      };
    },
    [model, bank, property]
  );
  // though model never changes
  return value;
}
