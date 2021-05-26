import { Route } from "react-router-dom";
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

  firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
      model.loggedIn = false;
      loadFromFirebase(model, user.uid)
        .then(() => model.setCurrentUser(user.uid))
        .then(() => {
          saveToFirebase(model);
          model.loggedIn = true;
          model.loadingData(false);
        });
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
        <AuthPresenter model={model} />
        <BankPresenter model={model} />
      </BottomContainer>
    </AppWrapper>
  );
}

export default App;
