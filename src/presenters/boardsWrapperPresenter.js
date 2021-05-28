import React from "react";
import { BankView, AddBoardView } from "../views";

/*
    BoardsWrapperPresenter 

    Manages new boards.

*/
export default function BoardsWrapperPresenter(props) {
  const [newBoardName, setNewBoardName] = React.useState("");

  return (
    <BankView>
      {props.children}
      <AddBoardView
        value={newBoardName}
        addBoard={() => {
          props.model.addBoard(newBoardName);
          setNewBoardName("");
        }}
        onBoardnameChange={(name) => {
          setNewBoardName(name);
        }}
      />
    </BankView>
  );
}
