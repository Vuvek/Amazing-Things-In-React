import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom'

function RestrauntMenu() {
  const [restrauntInfo, setRestrauntInfo] = useState(null);
  const [menuCard, setMenuCard] = useState(null);
  const params = useParams()
  const {resId} = params;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const result = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6314473&lng=77.41640629999999&restaurantId=${resId}&catalog_qa=und`
    );
    const data = await result.json();
    console.log(data);
    setRestrauntInfo(data);
    // setMenuCard()
  };
  if (restrauntInfo == null) return <Shimmer />
  const { name, cuisines, costForTwo, costForTwoMessage, cloudinaryImageId } =
    restrauntInfo?.data?.cards[0]?.card?.card?.info;

    const {itemCards } = restrauntInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  return (
    <div className="menu">
        <div>
          <h1>{restrauntInfo?.name}</h1>
          <h2>
            {cuisines.join(", ")} -{" "}
            {costForTwoMessage}
          </h2>
          <ul>

            {
                itemCards?.map((item,index) => {
                    return (
                            <li key={item?.card?.info?.name?.id}>{item?.card?.info?.name} - {item?.card?.info?.price}</li>
                    )
                })
            }
          </ul>
        </div>
    </div>
  );
}

export default RestrauntMenu;
