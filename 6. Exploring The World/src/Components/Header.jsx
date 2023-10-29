import { useState } from "react";

const Header = () => {
  const [isLogin,setIsLogin] = useState('Login') 
    return (
      <>
        <div className="header">
          <div className="logo-container">
            <img
              className="logo"
              src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg"
              alt="Reatraunt Logo"
            />
          </div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
              <button className="btn" onClick={() => isLogin == 'Login' ? setIsLogin('Logout') : setIsLogin('Login')}>{isLogin}</button>
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default Header