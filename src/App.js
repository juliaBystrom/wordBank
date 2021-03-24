import "./App.css";
import { Route, Switch } from "react-router-dom";

import signInView from "./views/signInView";
import SidebarView from "./views/sidebarView";
import { WordBankModel } from "./models/wordBankModel";
import BankPresenter from "./presenters/bankPresenter"
//import SidebarPresenter from "./presenters/sidebarPresenter"

function App() {
  const model = new WordBankModel(true);
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