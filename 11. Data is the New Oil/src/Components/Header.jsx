import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { userContext } from "../utils/context/userDataContext";

const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  const status = useOnlineStatus();
  const userData = useContext(userContext);
  const { user, setUser } = userData;
  return (
    <>
      <div className="flex justify-between bg-pink-100">
        <div className="w-24 flex items-center ml-2">
          <img
            className="w-full"
            src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg"
            alt="Reatraunt Logo"
          />
          <input
            className="h-10 p-2"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <ul className="flex">
            <li className="mt-8 mr-7">
              Online Status : {status ? "🔴" : "✅"}
            </li>
            <li className="mt-8 mr-7">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="mt-8 mr-7">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="mt-8 mr-7">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            <li className="mt-8 mr-7">
              <Link to={"/grocery"}>Grocery</Link>
            </li>
            <li className="mt-8 mr-7">{user}</li>
            <button
              className="mt-8 mr-7"
              onClick={() =>
                isLogin == "Login" ? setIsLogin("Logout") : setIsLogin("Login")
              }
            >
              {isLogin}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
