import "./App.css";
import { Route, Switch } from "react-router-dom";

import LoginView from "./views/LoginView";
import Bank from "./views/BankView";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route exact path="/bank" component={Bank} />
      </Switch>
    </>
  );
}

export default App;
