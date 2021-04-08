import React from "react";
import TranslateView from "../views/translateView";

const TranslatePresenter = ({ model }) => {
  const [text, setText] = React.useState("");
  const [tag, setTag] = React.useState("");

  const useModelProp = (model, propertyName) => {
    const [value, setValue] = React.useState(model[propertyName]);
    React.useEffect(() => {
      function obs() {
        setValue(model[propertyName]);
      }
      model.addModelObserver(obs);
      /* return function () {
        model.removeModelObserver(obs);
      }; */
    }, [model, propertyName]); // Kanske lägga till propertyName i arrayen.
    return value;
  };

  let tags = useModelProp(model, "tags");


  return (
    <TranslateView
      tags = {tags}
      setText={(phrase) => {setText(phrase);}}
      translate={() => {model.translate(text);}}
      fromLanguage={model.languageFrom}
      toLanguage={model.languageTo}
      createCard={() => {if(tag){model.addTag(tag); model.setTag(tag); model.setPhrase(text); model.createCard(text, tag)} else console.log("please choose a tag")}}
      setTag={(newTag) => {setTag(newTag); model.currentTag=tag}}
      /*storeToDb = {() => db.collection("cards").doc(tag).add({
        phrase: text
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    })}
    */
    />
  );
};
export default TranslatePresenter;
