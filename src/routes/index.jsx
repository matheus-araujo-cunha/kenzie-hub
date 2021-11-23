import { Route, Switch } from "react-router-dom";

import { useState, useEffect } from "react";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Sign from "../pages/Sign";

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("KenzieHub:token"));

    if (token) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </Route>

      <Route path="/sign">
        <Sign isAuthenticated={isAuthenticated} />
      </Route>

      <Route path="/dashboard">
        <Dashboard
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
