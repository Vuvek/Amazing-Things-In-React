import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauratMenu from "../utils/hooks/useRestaurament";
import RestrauntCategory from "./RestrauntCategory";

function RestrauntMenu() {
  // const [restrauntInfo, setRestrauntInfo] = useState(null);

  const [menuCard, setMenuCard] = useState(null);
  const [id, setId] = useState(null);
  const params = useParams();
  const { resId } = params;

  const restrauntInfo = useRestauratMenu(resId);

  if (restrauntInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwo, costForTwoMessage, cloudinaryImageId } =
    restrauntInfo?.data?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   restrauntInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
  //     ?.card?.card;

  const categories =
    restrauntInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <div className="flex justify-center flex-col items-center mt-5">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h2 className="mt-6 text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
        {/* Categories Accordian */}

        {categories?.map((categorie, index) => {
          return (
            <RestrauntCategory
              key={categorie?.card?.card?.title}
              id={id}
              setId={setId}
              data={categorie?.card?.card}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RestrauntMenu;
