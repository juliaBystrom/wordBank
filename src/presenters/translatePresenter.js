import React, { useState, useEffect } from "react";
import TranslateView from "../views/translateView";
import { googleTranslate } from "../utils/googleTranslate";
import cookie from "react-cookies";

const TranslatePresenter = ({ model }) => {
  const [phrase, setPhrase] = React.useState("");
  const [tag, setTag] = React.useState("");

  const [languageCodes, setLanguageCodes] = useState([]);

  const [question, setQuestion] = useState(
    cookie.load("question") ? cookie.load("question") : "What language do you prefer to read with?"
  );

  useEffect(() => {
    const getLanguageCodes = (languageCodes) => {
      setLanguageCodes(languageCodes);
    };
    googleTranslate.getSupportedLanguages("en", function (err, languageCodes) {
      getLanguageCodes(languageCodes);
    });
  }, []);

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
    }, [model, propertyName, value]); 
    return value;
  };

  let tags = useModelProperty(model, "tags");
  let transPhrase = useModelProperty(model, "transPhrase");
  let toLanguage=useModelProperty(model, "toLanguage");

  let cookieLanguage = cookie.load("language");





  return (
    <TranslateView

    setLanguage = {(newLanguage) => {

      model.setToLanguage(newLanguage);
      console.log(toLanguage);

      cookie.save("language", newLanguage, { path: "/" })
      
}} //ska va mer effektivt att spara till cookie
    changeHandler = {(newLanguage) => {
      model.setToLanguage(newLanguage);
      let cookieLanguage = cookie.load("language");}}

    translate = {() => {
        //console.log("phrase: " + phrase + " language: " + language);
        googleTranslate.translate(phrase, toLanguage, function (err, translation) {
          console.log(phrase);
          model.setTransPhrase(translation.translatedText);
          console.log(translation.translatedText);
        });

      }} 
    languageCodes = {languageCodes}

    transPhrase = {transPhrase} 
 
    fromLanguage={model.languageFrom} 
    toLanguage={toLanguage}
    
      tags={tags}
      setPhrase={(phrase) => {
        setPhrase(phrase);
      }}



      createCard={() => {
        if (tag) {
          model.addTag(tag);
          model.setTag(tag);
          model.setPhrase(phrase);
          model.createCard(phrase, tag);
        } else console.log("please choose a tag");
      }}
      setTag={(newTag) => {
        setTag(newTag);
        model.currentTag = tag;
      }}
    />
  );
    };
export default TranslatePresenter;
