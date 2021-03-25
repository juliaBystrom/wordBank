import "./App.css";
//import { Route, Switch } from "react-router-dom";
import { WordBankModel } from "./models/wordBankModel";
// import BankPresenter from "./presenters/bankPresenter"
import SidebarPresenter from "./presenters/sidebarPresenter";


function App() {
  const model = new WordBankModel(true, false);
  return (
    <>
      {/*       <Switch>
        <Route exact path="/" component={signInView} />
        <Route exact path="/bank" component={sidebarView} />
      </Switch> */}
      {/* <BankPresenter model={model}></BankPresenter> */}
      <SidebarPresenter model={model}></SidebarPresenter>

    </>
  );
}

export default App;