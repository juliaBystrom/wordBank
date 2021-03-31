import React from "react";
import TranslateView from "../views/translateView";

const TranslatePresenter = ({ model }) => {
  const [text, setText] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [error, setError] = React.useState(null);

  return (
    <TranslateView
      setText={(phrase) => setText(phrase)}
      translate={() => model.translate(text)}
      fromLanguage="English"
      toLanguage="French"
      createCard={() => model.createCard(text, tag)}
      setTag={(newTag) => setTag(newTag)}
    />
  );
};
export default TranslatePresenter;
