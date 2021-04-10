import React, { useState } from "react";
import TranslateView from "../views/translateView";
import useModelSubclassProperty from "./useModelSubclassProperty";

const TranslatePresenter = ({ model }) => {
  const [text, setText] = React.useState("");
  const [tag, setTag] = React.useState("");
  
  // To be used until api is fixed
  const translation = "dummy translation";


  // Used to create the data list of boards to choose from
  const boards = useModelSubclassProperty(model, "banks", model.currentBank, "boards");


  // Used to create the tags list of boards to choose from
  const tags = useModelSubclassProperty(model, "banks", model.currentBank, "tags");

  const createTranslationCard = (boardID) => {
    // Note: Please dont put a if else statement with 5 instuctions in one line of code :´)
    if (tag) {
      model.addTag(tag);
      model.createCard(text, translation, boardID, tag);
    } else {
      console.log("please choose a tag");
    }

  };

  // Used to controll the dropdown of possible boards to save to

  const [open, setOpen] = useState(false);
  // Might be unecesarry now but usefull if we want to not wipe translate and instead be able to change board after save. 
  const [selected, setSelectd] = useState(0);



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
      setTag={(newTag) => {
        setTag(newTag);
      }}
      saveToBoard={(board) => {


        // Will close when selected
        setOpen(!open)
        
        // Use state resets to 0 no use
        setSelectd(board.boardID);

        createTranslationCard(board.boardID)
        // Should remove text etc now
      }}
      availableBoards={boards}
      toggle={() => setOpen(!open)}
      openSelector={open}

    />
  );
};
export default TranslatePresenter;
