import { CDN_URL } from "../utils/Constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { foodItem } = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating, sla, id } =
    foodItem;
  const { deliveryTime } = sla;

  return (
    <Link to={`/restaurants/${id}`} style={{ textDecoration: "none" }}>
      <div className="p-4 m-2 rounded-s shadow-sm hover:bg-slate-200">
        <div className="w-60 bg-gray-400">
          <img
            className="w-100 object-cover rounded-sm"
            src={CDN_URL + cloudinaryImageId}
            alt="Magna Food"
          />
        </div>
        <div className="whitespace-break-spaces w-60 text-center">
          <h3 className="text-center mt-2">{name}</h3>
          <p className="h-5 overflow-hidden">{cuisines.join(" ")}</p>
          <p className="">{avgRating} Stars</p>
          <span>{costForTwo}</span>
          <p>{deliveryTime} minutes</p>
        </div>
      </div>
    </Link>
  );
};

export const withPromotedComponent = (RestaurantCard) => {
  return (props) => {
    return (
      <div data-testid="resCard" className="relative">
        <label className="absolute bg-black rounded-md text-white m-2 p-2">
          Prmoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

// export const Label = (props) => {
//   return (
//     <>
//       <div>
//         <p>{props.label}</p>
//       </div>
//     </>
//   );
// };
// export const AddGreenColor = (props) => {
//   return (
//     <>
//       <div className="bg-[green] w-40 h-20">
//         <props.NewLabel label={"Hello World"} />
//       </div>
//     </>
//   );
// };
