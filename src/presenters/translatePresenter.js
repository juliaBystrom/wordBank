import React, { useState, useEffect, useContext } from "react";
import TranslateView from "../views/translateView";
import useBankProp from "./useBankProp";
import { googleTranslate } from "../utils/googleTranslate";
import useModelProp from "./useModelProp";
import { AuthContext } from "./AuthProvider.js";

const TranslatePresenter = ({ model }) => {
  /* const { currentUser } = useContext(AuthContext);
  let model;
  if (currentUser) await loadFromFirebase(props.model);
  else model = props.model; */

  const [phrase, setPhrase] = React.useState("");
  const [tag, setTag] = React.useState("");
  let transPhrase = useModelProp(model, "transPhrase");
  let toLanguage = useModelProp(model, "toLanguage");
  let fromLanguage = useModelProp(model, "fromLanguage");
  let loggedIn = useModelProp(model, "loggedIn");
  let placeholder = useModelProp(model, "placeholder");
  let boards = useModelProp(model.banks[0], "boards");
  let tags = useModelProp(model.banks[0], "tags");

  useEffect(() => {
    console.log("tags = ", tags);
    console.log("boards = ", boards);
    console.log("model = ", model);
    console.log("banks = ", model.banks);
  }, [loggedIn, boards, tags, model]);

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

  //Vill egentligen göra denna mer generell för att översätta andra grejer också
  const translate = () => {
    googleTranslate.translate(
      phrase,
      fromLanguage,
      toLanguage,
      function (err, translation) {
        console.log(phrase);
        model.setTransPhrase(translation.translatedText);
      }
    );
  };
  //Den här borde tex i framtiden gå att göra med funktionen ovan
  const translatePlaceholder = (newLanguage) => {
    googleTranslate.translate(
      placeholder,
      fromLanguage,
      newLanguage,
      function (err, translation) {
        console.log(placeholder);
        model.setPlaceholder(translation.translatedText);
      }
    );
  };

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
        console.log(toLanguage);
      }}
      setFromLanguage={(newLanguage) => {
        translatePlaceholder(newLanguage);
        model.setFromLanguage(newLanguage);
        model.setTransPhrase("");
        console.log(fromLanguage);
      }}
      translate={() => {
        model.setTransPhrase("");
        translate();
      }}
      tags={tags}
      setPhrase={(phrase) => {
        setPhrase(phrase);
      }}
      //använder model state för coherence med andra användningar av transphrase
      setTransPhrase={(phrase) => {
        model.setTransPhrase(phrase);
      }}
      createCard={() => {
        // Moved this code to createTranslationCard
        // This prop is unecesarry but keept to not breaking anything
        createTranslationCard();
      }}
      setTag={(newTagName) => {
        setTag(newTagName);
      }}
      saveToBoard={(board) => {
        // Will close when selected
        setOpen(!open);

        // Use state resets to 0 no use
        setSelectd(board.id);

        createTranslationCard(board.id);
        // Should remove text etc now
      }}
      availableBoards={boards}
      toggle={() => setOpen(!open)}
      openSelector={open}
    />
  );
};

export default TranslatePresenter;
