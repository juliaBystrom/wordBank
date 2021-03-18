import "./App.css";
import { Route, Switch } from "react-router-dom";

import { SignInPresenter } from "./presenters/SignInPresenter";
import { sidebarView } from "./views/sidebarView";

function App() {
  return (
    <>
      <div
        style={{
          height: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e0e0e0",
        }}
      >
        English -- French
      </div>
      <Switch>
        <Route exact path="/" component={SignInPresenter} />
        <Route exact path="/bank" component={sidebarView} />
      </Switch>
    </>
  );
}

export default App;
