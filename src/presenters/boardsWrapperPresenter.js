import React from "react";
import { BankView, AddBoardView, isLoading } from "../views";

/*
    BoardsWrapperPresenter 

    Manages new boards.

*/
export default function BoardsWrapperPresenter(props) {
  const [newBoardName, setNewBoardName] = React.useState("");

  return (
    isLoading(props.loading) || (
      <BankView>
        {props.children}
        <AddBoardView
          value={newBoardName}
          addBoard={() => {
            props.model.addBoard(newBoardName);
            setNewBoardName("");
            console.log("Model after adding board: ", props.model);
          }}
          onBoardnameChange={(name) => {
            setNewBoardName(name);
          }}
        />
      </BankView>
    )
  );
}
