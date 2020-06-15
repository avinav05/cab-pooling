import React, { useState, useContext, createContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useClient } from "../client";
import Login from "../components/auth/login";
import SignUp from "../components/auth/signup";
import Skeleton from "../components/layout/skeleton";
//import { LOGOUT_MUTATION } from "../graphql/mutations";

const Context = createContext({
  currentUser: null,
  isAuth: false,
});

const Auth = () => {
  const client = useClient();
  const { state, dispatch } = useContext(Context);
  const [routine, setRoutine] = useState("login");
  const [cookies, removeCookie] = useCookies(["user"]);

  const displayRoutine = () => {
    // if (state.isAuth) {
    //   if (routine === "logout") {
    //     removeCookie("user", null, { maxAge: 0 });

    //     dispatch({ type: "LOGOUT_USER" });
    //   }
    //   return <Redirect to="/" />;
    // }

    switch (routine) {
      case "signup":
        return <SignUp />;
      default:
        return <Login />;
    }
  };

  return (
    <Skeleton>
      <h1>Auth Page</h1>
      {displayRoutine()}
    </Skeleton>
  );
};

export default Auth;
