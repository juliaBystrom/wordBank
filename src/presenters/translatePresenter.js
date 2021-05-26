import React, { useState, useEffect } from "react";
import TranslateView from "../views/translateView";
import useBankProp from "./useBankProp";
import { googleTranslate } from "../utils/googleTranslate";
import useModelProp from "./useModelProp";

/* 

TranslatePresenter handles translation of phrases. If user is loggedIn it will also handle tagging and saving of translation

*/

const TranslatePresenter = ({ model }) => {
  const [phrase, setPhrase] = React.useState("");
  const [tag, setTag] = React.useState("");
  let transPhrase = useModelProp(model, "transPhrase");
  let toLanguage = useModelProp(model, "toLanguage");
  let fromLanguage = useModelProp(model, "fromLanguage");
  let loggedIn = useModelProp(model, "loggedIn");
  let placeholder = useModelProp(model, "placeholder");
  let boards = useBankProp(model, "boards");
  let tags = useBankProp(model, "tags");

  const [open, setOpen] = useState(false);
  const [loadingText, setLoadingText] = useState("Hämtar översättning...");
  const createTranslationCard = (boardId) => {
    if (!tag) {
      alert(
        "Tag your translation to save it.\n \nTags are a great way to find the translations you’re looking for by filtering on them in the sidebar.\n \n Suggestions for tags:\n 'Swedish English' - what languages are used \n 'Verb' / 'Past tense' - what grammar is used"
      );
    } else if (!transPhrase) {
      alert("Oops! Looks like you haven't clicked on 'Translate!' yet.");
    } else {
      model.addTag(tag);
      model.createCard(phrase, transPhrase, boardId, tag);
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

  //newLanguage is toLanguage by default, if not stated by caller
  const translate = (text, translateCallback, newLanguage = toLanguage) => {
    googleTranslate.translate(
      text,
      fromLanguage,
      newLanguage,
      function (err, translation) {
        translateCallback(translation.translatedText);
      }
    );
  };

  //Functions to enable callback in translate()
  function setPlaceholder(newPlaceholder) {
    model.setPlaceholder(newPlaceholder);
  }

  function setTransPhrase(newTransPhrase) {
    model.setTransPhrase(newTransPhrase);
  }

  return (
    <TranslateView
      model={model}
      loggedIn={loggedIn}
      languageCodes={languageCodes}
      transPhrase={transPhrase}
      fromLanguage={fromLanguage}
      placeholder={placeholder}
      toLanguage={toLanguage}
      setToLanguage={(newLanguage) => {
        model.setToLanguage(newLanguage);
      }}
      setFromLanguage={(newLanguage) => {
        model.setFromLanguage(newLanguage);
        translate(placeholder, setPlaceholder, newLanguage);
        translate(loadingText, setLoadingText, newLanguage);
        model.setPhrase("");
      }}
      translate={() => {
        model.setTransPhrase(loadingText);
        if (fromLanguage === toLanguage) {
          model.setTransPhrase(phrase);
          return;
        }
        translate(phrase, setTransPhrase);
      }}
      tags={tags}
      setPhrase={(phrase) => {
        setPhrase(phrase);
      }}
      setTransPhrase={(phrase) => {
        model.setTransPhrase(phrase);
      }}
      setTag={(newTagName) => {
        setTag(newTagName);
      }}
      saveToBoard={(board) => {
        // Will close when selected
        setOpen(!open);
        createTranslationCard(board.id);
      }}
      availableBoards={boards}
      toggle={() => {
        if (model.userHasBoards()) {
          setOpen(!open);
        } else {
          alert("Create a board to save your translation to.");
        }
      }}
      openSelector={open}
    />
  );
};

export default TranslatePresenter;
