import "./App.css";
import { Route, Switch } from "react-router-dom";

import signInView from "./views/signInView";
import sidebarView from "./views/sidebarView";
import { WordBankModel } from "./models/wordBankModel";
import BankPresenter from "./presenters/bankPresenter"

function App() {
  const model = new WordBankModel();
  return (
    <>
      {/*       <Switch>
        <Route exact path="/" component={signInView} />
        <Route exact path="/bank" component={sidebarView} />
      </Switch> */}
      <BankPresenter model={model}></BankPresenter>
    </>
  );
}

export default App;
