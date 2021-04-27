import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { WordBankModel } from "./models/wordBankModel";
import { firebaseApp } from "./firebase";
import BankPresenter from "./presenters/bankPresenter";
import { AuthPresenter } from "./presenters/AuthPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import SidebarPresenter from "./presenters/sidebarPresenter";
import { useState } from "react";

function App() {
  require("dotenv").config();
  window.db = firebaseApp.firestore();
  //const model = new WordBankModel();
  const [model, setModel] = useState(new WordBankModel());

  return (
    <>
      <TranslatePresenter model={model} />
      <SidebarPresenter model={model} />
      <Route
        exact
        path="/"
        component={() => <AuthPresenter model={model} setModel={setModel} />}
      />
      <Route
        exact
        path="/bank"
        component={() => {
          if (model.userId) {
            return <BankPresenter model={model} />;
          } else return <div>nothing</div>;
        }}
      />

      {/* <Route exact path="/test" component={boardView} /> */}
    </>
  );
}

export default App;
