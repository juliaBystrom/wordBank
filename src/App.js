import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { WordBankModel } from "./models/wordBankModel";
import { firebaseApp } from "./firebase";
import BankPresenter from "./presenters/bankPresenter";
import { AuthPresenter } from "./presenters/AuthPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import boardView from "./views/boardView";

import { persistModel } from "./persistModel";
import SidebarPresenter from "./presenters/sidebarPresenter";
import TranslateViewTEST from "./views/TranslateViewTEST";

function App() {
  window.db = firebaseApp.firestore(); //finns kanske nån annan lösning än window.?
  const model = new WordBankModel(true);
  //persistModel(model);

  return (
    <>
      <TranslatePresenter model={model} />
      <SidebarPresenter model={model} />
      <Route exact path="/" component={() => <AuthPresenter model={model} />} />
      {/* <Route exact path="/test" component={boardView} /> */}
      <Route exact path="/bank" component={() => <BankPresenter model={model} />} />
    </>
  );
}

export default App;
