import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
