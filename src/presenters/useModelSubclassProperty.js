import React from "react";

export default function useModelSubclassProperty(model, subclass, nr, property) {  // custom hook
    const [value, setValue] = React.useState(model[subclass][nr][property]);

    React.useEffect(function () {
        function obs() {
            setValue(model[subclass][nr][property])
            // setValue(model.banks[model.currentBank].boards)
            // setValue(model[propertyName])
        }
        model.addObserver(obs);
        return function () { model.removeObserver(obs); }
    }, [model[subclass][nr][property]]);
    // though model never changes 



    return value;
}