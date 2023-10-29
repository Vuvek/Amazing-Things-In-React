import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <>
      <dvi className="header">
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
          </ul>
        </div>
      </dvi>
    </>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="card-img-box">
        <img
          className="card-img"
          src="https://qichen-react.vercel.app/assets/images/menu/menu-3.png"
          alt="Magna Food"
        />
      </div>
      <div className="card-details">
        <h3>Steamed Crabs Dish</h3>
        <p>Roasted langoustine, consommé</p>
        <span>$</span> 253.59
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search-container">
          <input className="search" type="text" placeholder="Search" />
        </div>
        <div className="res-container">
          <div className="sub-card">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
