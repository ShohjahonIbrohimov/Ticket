import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../css/main.css";
import "antd/dist/antd.css";
import SiderDemo from "../components/Layout";
import { ROUTES, ROUTES_SIGN_IN_SIGN_UP } from "../routes/routes";
import { store } from "../redux/store";
import axios from "axios";
import { Redirect } from "react-router-dom";
// REDUX
import { selectToken } from "../redux/auth/auth.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const MainPage = ({ token }) => {
  axios.defaults.baseURL = "https://api.apicrm.online/";
  axios.defaults.headers.common["x-access-token"] = token;
  return (
    <>
      {!token && <Redirect to="/login" />}
      {token && (
        <SiderDemo>
          <Switch>
            {ROUTES.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </SiderDemo>
      )}
      <ScreenSignIn />
    </>
  );
};

const ScreenSignIn = () => {
  return (
    <>
      <Switch>
        {ROUTES_SIGN_IN_SIGN_UP.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

export default connect(mapStateToProps)(MainPage);
