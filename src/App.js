import React, { useEffect } from "react";
import "./App.css";
import { Model } from "./model/model";
import { firebaseApp } from "./firebase/firebaseConfig";
import BankPresenter from "./presenters/bankPresenter";
import { AuthPresenter } from "./presenters/authPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import SidebarPresenter from "./presenters/sidebarPresenter";
import isLoading from "./views/isLoading";

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
  console.log("app1 loading: ", model.loading);

  firebaseApp.firebase_
    .auth()
    .setPersistence(firebaseApp.firebase_.auth.Auth.Persistence.SESSION);

  useEffect(() => {
    console.log("app js use effect");
    return firebaseApp.auth().onAuthStateChanged(function (user) {
      if (user) {
        model.loadingData(true);
        loadFromFirebase(model, user.uid)
          .then(() => {
            console.log("load from firebase");
            model.setCurrentUser(user.uid);
            model.loadingData(false);
          })
          .then(() => {
            console.log("save to firebase");
            saveToFirebase(model);
           
          });
      }
      
    });
  }, []);

  console.log("app2 loading: ", model.loading);

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
