import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import { WordBankModel } from "./models/wordBankModel";
import BankPresenter from "./presenters/bankPresenter";
import { AuthPresenter } from "./presenters/AuthPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import TranslateView from "./views/translateView.js";
import sidebarView from "./views/sidebarView";
import boardView from "./views/boardView";

function App() {
  const model = new WordBankModel(true);
  return (
    <>
      <TranslatePresenter model={model} />
      <Route exact path="/" component={AuthPresenter} />
      <Route exact path="/test" component={boardView} />
      <Route exact path="/translate" component={TranslatePresenter} model={model} />
      {/* <Route exact path="/bank" component={BankPresenter} model={model} /> */}
    </>
  );
}

export default App;
