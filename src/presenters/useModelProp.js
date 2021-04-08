import React from 'react';

export default function useModelProp(model, propertyName) {  // custom hook
    const [value, setValue] = React.useState(model[propertyName]);

    React.useEffect(function () {
        function obs() {
            setValue(model[propertyName])
        }
        model.addModelObserver(obs);
        return function () { model.removeModelObserver(obs); }
    }, [model]);
    // though model never changes 
    return value;
}