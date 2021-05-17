import React, { useState } from "react";
import { SidebarView } from "../views";
import useModelProp from "./useModelProp.js";
import useBankProp from "./useBankProp.js";
import { firebaseApp } from "../firebase";
import { useHistory } from "react-router-dom";

export default function SidebarPresenter({ model }) {
  const [open, setOpen] = useState(0);
  const [dropBanks, setDropBanks] = useState(0);
  const [dropFilter, setDropFilter] = useState(0);

  let history = useHistory();

  const banks = useModelProp(model, "banks");
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
      onFilter={(tag) => model.filterOnTag(tag)}
      banks={banks}
      tags={tags}
      logout={() => {
        firebaseApp
          .auth()
          .signOut()
          .then(() => {
            
            history.push("/");
            model.logout();
            /* model = null; */

            
          })
          .catch((err) => {
            
          });
      }}
    />
  );
}
