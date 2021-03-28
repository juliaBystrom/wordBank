import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import { WordBankModel } from "./models/wordBankModel";
import BankPresenter from "./presenters/bankPresenter"
import { AuthPresenter } from "./presenters/AuthPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import TranslateView from "./views/translateView.js";
import signInView from "./views/signInView";
import sidebarView from "./views/sidebarView";
import boardView from "./views/boardView";

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
    <>
       {/*<BankPresenter model={model}></BankPresenter>*/}
  
      <TempTranslationView>English - to - French</TempTranslationView>
      <Route exact path="/" component={AuthPresenter} />
      <Route exact path="/bank" component={boardView} />
    <TranslatePresenter model={model}></TranslatePresenter>
    </>
    );
}

export default App;
