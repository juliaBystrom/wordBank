import React from "react";

/*
    useModelSubSubclassProperty parameters is:
        - model
        - subclass (banks,)
        - nr of element in subclass list
        - subclass of element
        - id 

        TODO this code together with other useModel property need to be made easier to use !
        This code is general but at the moment only usable for:

        model, "banks", urrentBank, "boards", boardId

*/
export default function useModelSubSubclassProperty(model, subclass, nr, subsubclass,id) {  // custom hook
    const [value, setValue] = React.useState(model[subclass][nr][subsubclass][id]);

    React.useEffect(function () {
        function obs() {
            setValue(model[subclass][nr][subsubclass][id])
        }
        model.addModelObserver(obs);
        return function () { model.removeModelObserver(obs); }
    }, [model[subclass][nr][subsubclass][id]]);

    return value;
}