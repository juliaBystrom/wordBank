import React from "react";
import { BankView, AddBoardView, isLoading } from "../views";
import useModelProp from "./useModelProp";

/*
    BoardsWrapperPresenter 

    Manages new boards.

*/
export default function BoardsWrapperPresenter(props) {
  const [newBoardName, setNewBoardName] = React.useState("");
  // onst loadingData = useModelProp(props.model, "loading");
  // console.log("loading boardW: ", loadingData);
  const loadingData = useModelProp(props.model, "loading");

  console.log("bwrapperPres laoding props: ", loadingData);

  return (
    <BankView>
      {/* If isLoading return true because the model is not loaded from firestore the children will not render */}
      {isLoading(loadingData) || props.children}
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
