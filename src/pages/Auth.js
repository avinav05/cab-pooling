import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useClient } from "../client";
import Login from "";
import SignUp from "";
import { LOGOUT_MUTATION } from '../graphql/mutations';

const Context = createContext({
  currentUser: null,
  isAuth: false,
});



const Auth = ({ defaultRoutine = "login" }) => {
  const client = useClient();
  const { state, dispatch } = useContext(Context);
  const [routine, setRoutine] = useState(defaultRoutine);
  const [cookies, removeCookie] = useCookies(["user"]);

  const displayRoutine = () => {
    if (state.isAuth) {
      if (routine === "logout") {
        removeCookie("user", null, { maxAge: 0 });

        client.request(LOGOUT_MUTATION);
        dispatch({ type: "LOGOUT_USER" });
      }
      return <Redirect to="/" />;
    }

    switch (routine) {
      case "signup":
        return <SignUp />;
      default:
        return <Login />;
    }
  };

  return (
      <div></div>
  );
};

export default Auth;
