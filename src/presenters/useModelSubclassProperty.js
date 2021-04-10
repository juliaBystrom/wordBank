import React from "react";

/*
    useModelSubclassProperty parameters is:
        - model
        - subclass (banks,)
        - nr of element in subclass list
        - property of element
*/
export default function useModelSubclassProperty(model, subclass, nr, property) {  // custom hook
    const [value, setValue] = React.useState(model[subclass][nr][property]);

    React.useEffect(function () {
        function obs() {
            setValue(model[subclass][nr][property])
        }
        model.addModelObserver(obs);
        return function () { model.removeModelObserver(obs); }
    }, [model[subclass][nr][property]]);

    return value;
}
