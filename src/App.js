import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./App.css";

const App = () => {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();
  console.log({ user, isAuthenticated, isLoading });
  return (
    <div>
      <button onClick={() => loginWithPopup()}>login</button>
      <button onClick={() => logout()}>logout </button>

      {isAuthenticated && (
        <div>
          <pre> {JSON.stringify(user, null, 2)} </pre>
          <img src={user?.picture} />
        </div>
      )}
    </div>
  );
};

export default App;
