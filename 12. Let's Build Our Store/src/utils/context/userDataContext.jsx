import { useState } from "react";
import { createContext } from "react";

const userContext = createContext({
  user: "defaultUser",
  setUser: () => null,
  handleLogin: () => Promise.resolve(),
  handleLogout: () => Promise.resolve(),
});

const UserContextProvider = (props) => {
  const [user, setUser] = useState("defaultUser");
  const handleLogin = async () => {};
  const handleLogout = async () => {};

  const values = {
    user,
    setUser,
    handleLogin,
    handleLogout,
  };
  return (
    <>
      <userContext.Provider value={values}>
        {props.children}
      </userContext.Provider>
    </>
  );
};

export { UserContextProvider, userContext };
