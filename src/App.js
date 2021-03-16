import "./App.css";
import { Route, Switch } from "react-router-dom";

import Login from "./views/Login";
import Bank from "./views/Bank";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/bank" component={Bank} />
      </Switch>
    </>
  );
}

export default App;
