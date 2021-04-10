import React from 'react';

export default function useModelProp(model, propertyName) {  // custom hook
    const [value, setValue] = React.useState(model[propertyName]);

    React.useEffect(function () {
        function obs() {
            setValue(model[propertyName])
        }
        model.addObserver(obs);
        return function () { model.removeObserver(obs); }
    }, [model, propertyName, value]);
    // though model never changes 
    return value;
}