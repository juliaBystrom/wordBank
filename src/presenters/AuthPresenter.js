import React, { useState, useContext, createContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { firebaseApp } from "../firebase";
import { AuthView } from "../views/AuthView";

/*
const authContext = createContext();

const useAuth = () => {
  return useContext(authContext);
}

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signin = (cb) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}

onClick={() => {
  auth.signout(() => history.push("/"));
}}
*/

// TODO: https://firebase.google.com/docs/auth/web/google-signin

export const AuthPresenter = () => {
  let history = useHistory();
  const [user, setUser] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loginHandler = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((userCredentials) => {
        console.log("LogIn successful ", userCredentials.user.email);
        // console.log("User token: ", userCredentials.user);
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
        // console.log("User token: ", userCredentials.user);
        setEmailError("");
        setPasswordError("");
        // history.push("/bank");
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
