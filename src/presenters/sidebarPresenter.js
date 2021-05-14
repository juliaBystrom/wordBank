import React, { useState } from "react";
import { SidebarView } from "../views";
import useModelProp from "./useModelProp.js";
import useBankProp from "./useBankProp.js";
import { firebaseApp } from "../firebase";
import { Route, Switch, useHistory } from "react-router-dom";

export default function SidebarPresenter({ model }) {
  const [open, setOpen] = useState(0);
  const [dropBanks, setDropBanks] = useState(0);
  const [dropFilter, setDropFilter] = useState(0);
  const [dropSort, setDropSort] = useState(0);

  let history = useHistory();

  const banks = useModelProp(model, "banks");
  const sortings = useModelProp(model, "sortings");
  const tags = useBankProp(model, "tags");
  let loggedIn = useModelProp(model, "loggedIn");

  if (!loggedIn) return <div></div>;
  return (
    <SidebarView
      open={open}
      setOpen={setOpen}
      dropBanks={dropBanks}
      setDropBanks={setDropBanks}
      dropFilter={dropFilter}
      setDropFilter={setDropFilter}
      dropSort={dropSort}
      setDropSort={setDropSort}
      onFilter={(tag) => model.filterOnTag(tag)}
      onSort={() => model.sortAlphabetically()}
      sortings={sortings}
      banks={banks}
      tags={tags}
      logout={() => {
        firebaseApp
          .auth()
          .signOut()
          .then(() => {
            model.loggedIn = false;
            model.logout();
            /* model = null; */
            history.push("/");
            console.log("looged ouuuut!");
          })
          .catch((err) => {
            console.log("Log out error: ", err);
          });
      }}
    />
  );
}
