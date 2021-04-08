import React, { useState, useEffect } from "react";
import TranslateView from "../views/translateView";
import { googleTranslate } from "../utils/googleTranslate";
import cookie from "react-cookies";

const TranslatePresenter = ({ model }) => {
  const [text, setText] = React.useState("");
  const [tag, setTag] = React.useState("");

  const [languageCodes, setLanguageCodes] = useState([]);
  const [language, setLanguage] = useState(
    cookie.load("language") ? cookie.load("language") : "en"
  );
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
    }, [model, propertyName]); // Kanske lägga till propertyName i arrayen.
    return value;
  };

  let tags = useModelProperty(model, "tags");

  const changeHandler = (language) => {
    let cookieLanguage = cookie.load("language");
    let transQuestion = "";

    const translating = (transQuestion) => {
      if (question !== transQuestion) {
        this.setState({ question: transQuestion });
        cookie.save("question", transQuestion, { path: "/" });
      }
    };

    // translate the question when selecting a different language
    if (language !== cookieLanguage) {
      googleTranslate.translate(question, language, function (err, translation) {
        transQuestion = translation.translatedText;
        translating(transQuestion);
      });
    }

    setLanguage(language);
    cookie.save("language", language, { path: "/" });
  };

  return (
    <TranslateView
      tags={tags}
      setText={(phrase) => {
        setText(phrase);
      }}
      translate={() => {
        model.translate(text);
      }}
      fromLanguage={model.languageFrom}
      toLanguage={model.languageTo}
      createCard={() => {
        if (tag) {
          model.addTag(tag);
          model.setTag(tag);
          model.setPhrase(text);
          model.createCard(text, tag);
        } else console.log("please choose a tag");
      }}
      setTag={(newTag) => {
        setTag(newTag);
        model.currentTag = tag;
      }}
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
