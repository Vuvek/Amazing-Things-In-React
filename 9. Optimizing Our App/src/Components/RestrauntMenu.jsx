import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauratMenu from "../utils/hooks/useRestaurament";

function RestrauntMenu() {
  // const [restrauntInfo, setRestrauntInfo] = useState(null);
  const [menuCard, setMenuCard] = useState(null);
  const params = useParams();
  const { resId } = params;

  const restrauntInfo = useRestauratMenu(resId);

  if (restrauntInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwo, costForTwoMessage, cloudinaryImageId } =
    restrauntInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restrauntInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <div className="menu">
      <div>
        <h1>{restrauntInfo?.name}</h1>
        <h2>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
        <ul>
          {itemCards?.map((item, index) => {
            return (
              <li key={item?.card?.info?.name?.id}>
                {item?.card?.info?.name} - {item?.card?.info?.price}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestrauntMenu;
