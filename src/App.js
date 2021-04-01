import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { WordBankModel } from "./models/wordBankModel";
import BankPresenter from "./presenters/bankPresenter";
import { AuthPresenter } from "./presenters/AuthPresenter";
import TranslatePresenter from "./presenters/translatePresenter";
import boardView from "./views/boardView";
import SidebarPresenter from "./presenters/sidebarPresenter";

function App() {
  const model = new WordBankModel(true);

  return (
    <>
      <TranslatePresenter model={model} />
      <SidebarPresenter model={model} />
      <Route exact path="/" component={() => <AuthPresenter model={model} />} />
      {/* <Route exact path="/test" component={boardView} /> */}
      <Route exact path="/bank" component={() => <BankPresenter model={model} />} />
    </>
  );
}

export default App;
