import React from "react";
import { BankView, AddBoardView } from "../views";

/*
    BoardsWrapperPresenter 

    Manages new boards.
    TODO: Check if new boards trigers a new render for that one board  


*/
export default function BoardsWrapperPresenter(props) {
  const [newBoardName, setNewBoardName] = React.useState("");

  return (
    <BankView>
      {props.children}
      <AddBoardView
        value={newBoardName}
        addBoard={() => {
          props.model.addBoard(props.model.activeBankId, null, newBoardName);
          setNewBoardName("");
        }}
        onBoardnameChange={(name) => {
          setNewBoardName(name);
        }}
      />
    </BankView>
  );
}
