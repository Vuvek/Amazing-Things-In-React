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

  export default RestaurantCard
  