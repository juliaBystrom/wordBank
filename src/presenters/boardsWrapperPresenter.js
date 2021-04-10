import React from "react";
import { BankView, AddBoardView } from "../views";


/*
    BoardsWrapperPresenter 

    Manages new boards.
    TODO: Check if new boards trigers a new render for that one board  


*/
export default function BoardsWrapperPresenter(props) {
  const [newBoardName, setNewBoardName] = React.useState("");
  console.log("> Render BoardsWrapperPresenter");


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
