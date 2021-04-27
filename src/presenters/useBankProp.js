import React from 'react';
import useModelProp from "./useModelProp";

export default function useBankProp(model, property) {  // custom hook
    const activeBankId = useModelProp(model, "activeBankId");
    const banks = model.banks

    var bank = banks.filter(bank => {
        return bank.id === activeBankId;
      })[0]

    const [value, setValue] = React.useState(bank[property]);

    React.useEffect(function () {
        function obs() {
            setValue(bank[property])
        }
        model.addObserver(obs);
        return function () { model.removeObserver(obs); }
    }, [bank[property]]);
    // though model never changes 
    return value;
}
