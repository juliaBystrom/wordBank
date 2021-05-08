import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { WordBankModel } from "./models/wordBankModel";
import { firebaseApp } from "./firebase";
import BankPresenter from "./presenters/bankPresenter";
import useModelProp from "./presenters/useModelProp";
import { AuthPresenter } from "./presenters/AuthPresenter";
import { AuthProvider } from "./presenters/AuthProvider";
import TranslatePresenter from "./presenters/translatePresenter";
import SidebarPresenter from "./presenters/sidebarPresenter";

import {
  AppWrapper,
  HeaderContainer,
  BottomContainer,
  TopContainer,
} from "./styledComponents";

import { useEffect, useState } from "react";
import { loadFromFirebase } from "./loadFromFirebase";

function App() {
  require("dotenv").config();
  window.db = firebaseApp.firestore();
  let model = new WordBankModel();

  const [loading, setLoading] = useState(true);



  firebaseApp.firebase_
    .auth()
    .setPersistence(firebaseApp.firebase_.auth.Auth.Persistence.SESSION);

  firebaseApp.auth().onAuthStateChanged(async function (user) {
    if (user) {
      model.loggedIn = false;
      await loadFromFirebase(model, user.uid);
      model.setCurrentUser(user.uid);
      console.log("Model: ", model);
      model.loggedIn = true;
      setLoading(false)
    }
  });

 
  return (
    <AppWrapper>
      <HeaderContainer>
        <SidebarPresenter model={model} />
      </HeaderContainer>
      <TopContainer>
        <TranslatePresenter model={model} />
      </TopContainer>

      <BottomContainer>
        <Route
          exact
          path="/"
          component={() => <AuthPresenter model={model} />}
        />
        <Route
          exact
          path="/bank"
          component={() => {
            return <BankPresenter model={model} loading={loading} />;
          }}
        />
      </BottomContainer>

      {/* <Route exact path="/test" component={boardView} /> */}
    </AppWrapper>
  );
}

export default App;
