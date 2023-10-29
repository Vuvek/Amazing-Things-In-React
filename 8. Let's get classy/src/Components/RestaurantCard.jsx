import { CDN_URL } from "../utils/Constants";
import  { Link }  from "react-router-dom";

const RestaurantCard = (props) => {
  const { foodItem } = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating, sla, id } =
    foodItem;
  const { deliveryTime } = sla;

  return (
    <Link to={`/restaurants/${id}`} style={{textDecoration: 'none'}}>
      <div className="res-card">
        <div className="card-img-box">
          <img
            className="card-img"
            src={CDN_URL + cloudinaryImageId}
            alt="Magna Food"
          />
        </div>
        <div className="card-details">
          <h3>{name}</h3>
          <p>{cuisines.join(" ")}</p>
          <p>{avgRating} Stars</p>
          <span>{costForTwo}</span>
          <p>{deliveryTime} minutes</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
