import React from "react";
import TranslateView from "../views/translateView";
import useModelSubclassProperty from "./useModelSubclassProperty";

const TranslatePresenter = ({ model }) => {
  const [text, setText] = React.useState("");
  const [tag, setTag] = React.useState("");

  // To be used until api is fixed
  const translation = "dummy translation";


  // Used to create the data list of boards to choose from
  const boards = useModelSubclassProperty(model, "banks", model.currentBank, "boards");


  const useModelProperty = (model, propertyName) => {
    const [value, setValue] = React.useState(model[propertyName]);
    React.useEffect(() => {
      function obs() {
        setValue(model[propertyName]);
      }
      model.addObserver(obs);
      /* return function () {
        model.removeObserver(obs);
      }; */
    }, [model, propertyName]); // Kanske lägga till propertyName i arrayen.
    return value;
  };

  let tags = useModelProperty(model, "tags");

  const createTranslationCard = (boardID) => {
    // Note: Please dont put a if else statement with 5 instuctions in one line of code :´)
    if (tag) {
      model.addTag(tag);
      // model.setTag(tag);
      // model.setPhrase(text);
      model.createCard(text, translation, boardID, tag);
    } else {
      console.log("please choose a tag");
    }
  };


  return (
    <TranslateView
      tags={tags}
      setText={(phrase) => { setText(phrase); }}
      translate={() => { model.translate(text); }}
      fromLanguage={model.languageFrom}
      toLanguage={model.languageTo}
      createCard={() => {
        // Moved this code to createTranslationCard
        // This prop is unecesarry but keept to not breaking anything
        createTranslationCard();
      }}
      setTag={(newTag) => { setTag(newTag); model.currentTag = tag }}
      saveToBoard={boardID => {
        console.log("------- I presenter given:");
        console.log(boardID);
        console.log("-----------")
        createTranslationCard(boardID)
      }}
      availableBoards={boards}
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
