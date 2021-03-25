import Axios from "axios";
import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import { AuthContext } from "./providers/auth";

  Axios.defaults.baseURL = "https://mindpay.mindconsulting.com.br/api";
//Axios.defaults.baseURL = "http://localhost:3333/";

function App() {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) return <></>;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">{isAuthenticated ? <Admin /> : <Login />}</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
