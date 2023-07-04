import React, { useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ActiveList from "./pages/ActiveList";
import MainPage from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";
import { UseCallbackExample } from "./pages/UseCallbackExmple";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Header />
          <MainPage />
        </Route>
        <Route path="/activeList" exact>
          <Header />
          <ActiveList />
        </Route>
        <Route path="/useCallback" exact>
          <Header />
          <UseCallbackExample />
        </Route>
        <Route>
          <Header />
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
