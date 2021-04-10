import React from 'react';

export default function useBankProp(model,property) {  // custom hook
    const banks = model.banks
    const currentBank = model.currentBank;

    var bank = banks.filter(b => {
        return b.bankID === currentBank;
      })[0]

    const [value, setValue] = React.useState(bank[property]);

    React.useEffect(function () {
        function obs() {
            setValue(bank[property])
        }
        model.addModelObserver(obs);
        return function () { model.removeModelObserver(obs); }
    }, [bank[property]]);
    // though model never changes 
    return value;
}
