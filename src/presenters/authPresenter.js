import React, { useState } from "react";
import { saveToFirebase } from "../firebase/saveToFirebase";

import { firebaseApp } from "../firebase/firebaseConfig";
import { AuthView } from "../views/authView";
import useModelProp from "./useModelProp";


// TODO: https://firebase.google.com/docs/auth/web/google-signin

export const AuthPresenter = ({ model }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const loggedIn = useModelProp(model, "loggedIn");
  const loadingData = useModelProp(model, "loading");
  const refresh = useModelProp(model, "refresh");

  const loginHandler = async () => {
    /* quickStart(); */
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        model.setCurrentUser(userCredentials.user.uid);
        setEmailError("");
        setPasswordError("");
      })
      .catch((err) => {
        if (
          err.code === "auth/invalid-email" ||
          err.code === "auth/user-disabled" ||
          err.code === "auth/user-not-found"
        ) {
          setEmailError(err.message.split(".")[0]);
        } else setEmailError("");
        if (err.code === "auth/wrong-password") {
          setPasswordError(err.message);
        } else setPasswordError("");
      });
  };

  const registerHandler = () => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        model.createUserModel(userCredentials.user.uid);
        setEmailError("");
        setPasswordError("");
        model.loadingData(false);
      })
      .then(() => {
        saveToFirebase(model);
      })
      .catch((err) => {
        if (
          err.code === "auth/email-already-in-use" ||
          err.code === "auth/invalid-email"
        ) {
          setEmailError(err.message);
        } else setEmailError("");
        if (err.code === "auth/weak-password") {
          setPasswordError(err.message);
        } else setPasswordError("");
      });
  };

  return (!loggedIn && !loadingData && !refresh )? (
    <AuthView
      setEmail={(input) => setUser({ ...user, email: input })}
      setPassword={(input) => setUser({ ...user, password: input })}
      handleLogIn={() => {
        loginHandler();
      }}
      handleRegister={async () => {
        registerHandler();
      }}
      emailError={emailError}
      passwordError={passwordError}
    />
  ) : null;

};
