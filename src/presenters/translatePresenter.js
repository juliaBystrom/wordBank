import React, { useState, useEffect } from "react";

import TranslateView from "../views/translateView";
import { googleTranslate } from "../utils/googleTranslate";
import useModelProperty from "./useModelProperty";

const TranslatePresenter = ({ model }) => {
  const [phrase, setPhrase] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [languageCodes, setLanguageCodes] = useState([]);

  useEffect(() => {
    const getLanguageCodes = (languageCodes) => {
      setLanguageCodes(languageCodes);
    };
    googleTranslate.getSupportedLanguages("en", function (err, languageCodes) {
      getLanguageCodes(languageCodes);
    });
  }, []);

  let tags = useModelProperty(model, "tags");
  let transPhrase = useModelProperty(model, "transPhrase");
  let toLanguage = useModelProperty(model, "toLanguage");

  return (
    <TranslateView
      languageCodes={languageCodes}
      transPhrase={transPhrase}
      fromLanguage={model.languageFrom}
      toLanguage={toLanguage}
      tags={tags}
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
