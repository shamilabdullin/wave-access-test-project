import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ActiveList from "./pages/ActiveList";
import InactiveList from "./pages/InactiveList";
import MainPage from "./pages/MainPage";

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
        <Route path="/inactiveList" exact>
          <Header />
          <InactiveList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
