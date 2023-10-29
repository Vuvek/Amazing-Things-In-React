import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";

const Header = () => {

  const [isLogin,setIsLogin] = useState('Login') ;
  const [hideButton,setHideButton] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location,'fdjlksdajf',hideButton)

  useEffect(() => {
    if (location.pathname == '/login') {
      setHideButton(true)
    } else {
      setHideButton
    }
  },[location])

  const handleLogin = () => {
    if (localStorage.getItem('login')) {
      setIsLogin('Logout')
    } else {
      setIsLogin('Login')
    }
    navigate('/contact/company',{state : {data :{name : 'khiladi'}}})
  }

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
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li><Link to={'/about'}>About Us</Link></li>
              <li>
                <Link to={'/contact'}>Contact Us</Link>
              </li>
              {/* <li>
                <Link to={'/cart'}>Cart</Link>
              </li> */}
              {!hideButton && <button className="btn" onClick={handleLogin}>{isLogin}</button>}
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default Header