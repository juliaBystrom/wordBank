import "./App.css";

import { WordBankModel } from "./models/wordBankModel";
import TranslateView from "./views/translateView.js";

import TranslatePresenter from "./presenters/translatePresenter";

function App() {
  const model = new WordBankModel(true);
  return (
    /*
    <>
      <Switch>
        <Route exact path="/" component={signInView} />
        <Route exact path="/bank" component={sidebarView} />
      </Switch>
    </>
    */
   <TranslatePresenter model={model}></TranslatePresenter>
  );
}

export default App;
