import React, { useState, useContext, createContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { firebaseApp } from "../firebase";
import { AuthView } from "../views/AuthView";

// TODO: https://firebase.google.com/docs/auth/web/google-signin

export const AuthPresenter = ({ model }) => {
  /* const { Translate } = require("@google-cloud/translate").v2;
  const projectId = "wordbank-310007";
  const translate = new Translate({ projectId }); */
  /* const { Storage } = require("@google-cloud/storage");
  const storage = new Storage();
  // Makes an authenticated API request.
  async function listBuckets() {
    try {
      const results = await storage.getBuckets();
      const [buckets] = results;
      console.log("Buckets:");
      buckets.forEach((bucket) => {
        console.log(bucket.name);
      });
    } catch (err) {
      console.error("ERROR:", err);
    }
  }
  listBuckets(); */

  let history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  /* const quickStart = async () => {
    const text = "Hello, world!";
    const target = "sv";
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  }; */

  const loginHandler = async () => {
    /* quickStart(); */
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        console.log("LogIn successful ", userCredentials.user.email);
        console.log("User id: ", userCredentials.user.uid);
        setEmailError("");
        setPasswordError("");
        history.push("/bank");
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
        console.log("Register successful ", userCredentials.user.email);
        console.log("User id: ", userCredentials.user.uid);
        setEmailError("");
        setPasswordError("");
        history.push("/bank");
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use" || err.code === "auth/invalid-email") {
          setEmailError(err.message);
        } else setEmailError("");
        if (err.code === "auth/weak-password") {
          setPasswordError(err.message);
        } else setPasswordError("");
      });
  };

  return (
    <AuthView
      setEmail={(input) => setUser({ ...user, email: input })}
      setPassword={(input) => setUser({ ...user, password: input })}
      handleLogIn={() => {
        console.log("LogIn: ", user.email, " ", user.password);
        loginHandler();
      }}
      handleRegister={async () => {
        console.log("Register: ", user.email, " ", user.password);
        registerHandler();
      }}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
};
