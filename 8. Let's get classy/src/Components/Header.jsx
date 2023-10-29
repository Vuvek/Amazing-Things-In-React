import { useState } from "react";
import {Link} from 'react-router-dom'

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
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About Us</Link></li>
              <li><Link to={'/contact'}>Contact Us</Link></li>
              <li>Cart</li>
              <button className="btn" onClick={() => isLogin == 'Login' ? setIsLogin('Logout') : setIsLogin('Login')}>{isLogin}</button>
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default Header