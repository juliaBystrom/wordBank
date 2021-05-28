import React, { useEffect } from "react";
import "./App.css";
import { Model } from "./model/model";
import { firebaseApp } from "./firebase/firebaseConfig";
import BankPresenter from "./presenters/bankPresenter";
import { AuthPresenter } from "./presenters/authPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import SidebarPresenter from "./presenters/sidebarPresenter";

import {
  AppWrapper,
  HeaderContainer,
  BottomContainer,
  TopContainer,
} from "./styledComponents";

import { loadFromFirebase } from "./firebase/loadFromFirebase";
import { saveToFirebase } from "./firebase/saveToFirebase";

function App() {
  require("dotenv").config();
  window.db = firebaseApp.firestore();

  let model = new Model();

  firebaseApp.firebase_
    .auth()
    .setPersistence(firebaseApp.firebase_.auth.Auth.Persistence.SESSION);

  useEffect(() => {
    return firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        model.loadingData(true);
        model.setRefresh(true);
        loadFromFirebase(model, user.uid)
          .then(() => {
            model.setCurrentUser(user.uid);
            model.loadingData(false);
          })
          .then(() => {
            saveToFirebase(model);
          })
          .finally(() => {
            model.setRefresh(false);
          });
      } else {
        model.setRefresh(false)
      } 
    });
  }, []);


  return (
    <AppWrapper>
      <HeaderContainer>
        <SidebarPresenter model={model} />
      </HeaderContainer>
      <TopContainer>
        <TranslatePresenter model={model} />
      </TopContainer>

      <BottomContainer>
        <AuthPresenter model={model} />
        <BankPresenter model={model} />
      </BottomContainer>
    </AppWrapper>
  );
}

export default App;
