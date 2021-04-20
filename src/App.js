import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { WordBankModel } from "./models/wordBankModel";
import { firebaseApp } from "./firebase";
import BankPresenter from "./presenters/bankPresenter";
import { AuthPresenter } from "./presenters/AuthPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import { Persistence } from "./persistence.js";
import SidebarPresenter from "./presenters/sidebarPresenter";

function App() {
  require("dotenv").config();
  window.db = firebaseApp.firestore(); //finns kanske nån annan lösning än window.?
  const model = new WordBankModel();

  return (
    <>
      <TranslatePresenter model={model} />
      <SidebarPresenter model={model} />
      <Route exact path="/" component={() => <AuthPresenter model={model} />} />
      <Route
        exact
        path="/bank"
        component={() => <BankPresenter model={model} />}
      />
      {/* <Route exact path="/test" component={boardView} /> */}
    </>
  );
}

export default App;
