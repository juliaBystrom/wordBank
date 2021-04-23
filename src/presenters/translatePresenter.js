import React, { useState, useEffect } from "react";
import TranslateView from "../views/translateView";
import useBankProp from "./useBankProp";
import { googleTranslate } from "../utils/googleTranslate";
import useModelProp from "./useModelProp";
import Modal from 'react-modal';

const TranslatePresenter = ({ model }) => {
  const [phrase, setPhrase] = React.useState("");
  const [tag, setTag] = React.useState("");
  let transPhrase = useModelProp(model, "transPhrase");
  let toLanguage = useModelProp(model, "toLanguage");
  let fromLanguage = useModelProp(model, "fromLanguage");
  let loggedIn = useModelProp(model, "loggedIn");
  let placeholder = useModelProp(model, "placeholder");

  // Used to create the data list of boards to choose from

  const boards = useBankProp(model, "boards");

  // Used to create the tags list of boards to choose from
  const tags = useBankProp(model, "tags");

  //const createTranslationCard = (id) => {
  // Note: Please dont put a if else statement with 5 instuctions in one line of code :´)
  //if (tag) {
  //model.addTag(tag);
  //model.createCard(phrase, translation, id, tag);
  // } else {
  //  console.log("please choose a tag");
  // }};

  //
  // Used to controll the dropdown of possible boards to save to

  const [open, setOpen] = useState(false);
  // Might be unecesarry now but usefull if we want to not wipe translate and instead be able to change board after save.
  const [selected, setSelected] = useState(0);

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
  //Den här borde tex gå att göra med funktionen ovan
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

  const [modalIsOpen, setIsOpen] = React.useState(false);
    
  function openModal() {
      setIsOpen(true);
  }
  function closeModal() {
      setIsOpen(false);
  }


  const isNewLanguageCombo = (language1, language2) => {
    return model.isLanguageComboUsed(language1, language2);
  }

  return (
    <>
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
          if(isNewLanguageCombo(newLanguage, toLanguage)){
            openModal();
          } 
          console.log(toLanguage);
        }}
        setFromLanguage={(newLanguage) => {
          translatePlaceholder(newLanguage);
          model.setFromLanguage(newLanguage);
          model.setTransPhrase("");
          if(isNewLanguageCombo(newLanguage, toLanguage)){
            openModal();
          } 
          console.log(fromLanguage);
        }}
        translate={() => {
          translate();
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
        setTag={(newTagName) => {
          setTag(newTagName);
        }}
        saveToBoard={(board) => {
          // Will close when selected
          setOpen(!open);

          // Use state resets to 0 no use
          setSelected(board.id);

          createTranslationCard(board.id);
          // Should remove text etc now
        }}
        availableBoards={boards}
        toggle={() => setOpen(!open)}
        openSelector={open}
      /> 
      <CreateBankPresenter modalIsOpen={modalIsOpen} closeModal={closeModal} model={props.model}/>
    <> 
  );
};

export default TranslatePresenter;
