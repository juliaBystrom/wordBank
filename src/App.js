import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import { AuthPresenter } from "./presenters/AuthPresenter";
import boardView from "./views/boardView";

const TempTranslationView = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e0e0;
`;

function App() {
  return (
    <>
      <TempTranslationView>English - to - French</TempTranslationView>
      <Route exact path="/" component={AuthPresenter} />
      <Route exact path="/bank" component={boardView} />
    </>
  );
}

export default App;
