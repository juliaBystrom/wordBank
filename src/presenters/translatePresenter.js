import React, { useState, useEffect } from "react";
import TranslateView from "../views/translateView";
import useBankProp from "./useBankProp";
import { googleTranslate } from "../utils/googleTranslate";
import useModelProp from "./useModelProp";

const TranslatePresenter = ({ model }) => {
  const [phrase, setPhrase] = React.useState("");
  const [tag, setTag] = React.useState("");
  let transPhrase = useModelProp(model, "transPhrase");
  let toLanguage = useModelProp(model, "toLanguage");

  // Used to create the data list of boards to choose from

  const boards = useBankProp(model, "boards");

  // Used to create the tags list of boards to choose from
  const tags = useBankProp(model, "tags");

  // Used to controll the dropdown of possible boards to save to

  const [open, setOpen] = useState(false);
  // Might be unecesarry now but usefull if we want to not wipe translate and instead be able to change board after save.
  const [selected, setSelectd] = useState(0);

  const createTranslationCard = (boardID) => {
    if (!tag) {
      console.log("choose a tag");
    } else if (!transPhrase) {
      console.log("translate first");
    } else {
      model.addTag(tag);
      model.createCard(phrase, transPhrase, boardID, tag);
    }
  };

  const [languageCodes, setLanguageCodes] = useState([]);

  useEffect(() => {
    const getLanguageCodes = (languageCodes) => {
      setLanguageCodes(languageCodes);
    };
    googleTranslate.getSupportedLanguages("en", function (err, languageCodes) {
      getLanguageCodes(languageCodes);
    });
  }, []);

  return (
    <TranslateView
      languageCodes={languageCodes}
      transPhrase={transPhrase}
      fromLanguage={model.languageFrom}
      toLanguage={toLanguage}
      setLanguage={(newLanguage) => {
        model.setToLanguage(newLanguage);
        console.log(toLanguage);
      }}
      translate={() => {
        googleTranslate.translate(
          phrase,
          toLanguage,
          function (err, translation) {
            console.log(phrase);
            model.setTransPhrase(translation.translatedText);
            console.log(translation.translatedText);
          }
        );
      }}
      tags={tags}
      setPhrase={(phrase) => {
        setPhrase(phrase);
      }}
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

        setOpen(!open);

        // Use state resets to 0 no use
        setSelectd(board.boardID);

        createTranslationCard(board.boardID);
        // Should remove text etc now
      }}
      availableBoards={boards}
      toggle={() => setOpen(!open)}
      openSelector={open}
    />
  );
};

export default TranslatePresenter;
