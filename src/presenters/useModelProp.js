import React from "react";

export default function useModelProp(model, propertyName) {
  // custom hook
  const [value, setValue] = React.useState(model[propertyName]);

  React.useEffect(
    function () {
      function useModelObs() {
        if (!model || !propertyName) return;
        setValue(model[propertyName]);
      }
      model.addObserver(useModelObs);
      return function () {
        model.removeObserver(useModelObs);
      };
    },
    [model, propertyName, value]
  );
  // though model never changes
  return value;
}
