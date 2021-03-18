import React, { useState } from "react";

import { SignInView } from "../views/SignInView";

export const SignInPresenter = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <div>
      <SignInView handleLogIn={(username, password) => console.log("Username: ", username)} />
    </div>
  );
};
