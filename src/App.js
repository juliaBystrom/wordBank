import "./App.css";
import { Route, Switch } from "react-router-dom";

import signInView from "./views/signInView";
import sidebarView from "./views/sidebarView";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={signInView} />
        <Route exact path="/bank" component={sidebarView} />
      </Switch>
    </>
  );
}

export default App;
