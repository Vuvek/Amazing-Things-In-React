import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  const status = useOnlineStatus();
  return (
    <>
      <div className="flex justify-between bg-pink-100">
        <div className="w-24">
          <img
            className="w-full"
            src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg"
            alt="Reatraunt Logo"
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
            <li className="mt-8 mr-7">Cart</li>
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
