import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import TranslateView from "./views/translateView.js";

import TranslatePresenter from "./presenters/translatePresenter";
import signInView from "./views/signInView";
import sidebarView from "./views/sidebarView";
import { WordBankModel } from "./models/wordBankModel";
import BankPresenter from "./presenters/bankPresenter"
import { AuthPresenter } from "./presenters/AuthPresenter";
import { sidebarView } from "./views/sidebarView";

const TempTranslationView = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e0e0;
`;


function App() {
  const model = new WordBankModel(true);
  return (
    /*
    <>
       {/*<BankPresenter model={model}></BankPresenter>*/}
  
      <TempTranslationView>English - to - French</TempTranslationView>
      {/*
    <Router>
        <Route exact path="/" component={AuthPresenter} />
        <Route exact path="/bank" component={sidebarView} />
      </Router>
     */}
    </>
    */
   <TranslatePresenter model={model}></TranslatePresenter>
  );
}

export default App;
