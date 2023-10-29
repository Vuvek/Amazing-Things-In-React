import { useContext } from "react";
import { userContext } from "../context/userDataContext";

const useUserData = () => {
  return useContext(userContext);
};

export default useUserData;
