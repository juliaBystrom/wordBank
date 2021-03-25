import React from 'react'
import TranslateView from '../views/translateView';

const TranslatePresenter = ({model}) =>{
  const [text, setText] = React.useState("");
  const [tag, setTag] = React.useState("");
  const [error, setError] = React.useState(null);

    return(<div><TranslateView 
      setText = {(phrase)=>setText(phrase)} 
      translate={() => model.translate(text)} 
      fromLanguage = "English" 
      toLanguage="French"
      createCard={() => model.createCard(text, tag)} //ska vara annat argument sen
      setTag={(newTag)=>(setTag(newTag))}
      /></div>
          
      )
};
export default TranslatePresenter;
