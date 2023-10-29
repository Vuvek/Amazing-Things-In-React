import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/Constants";

const ItemList = ({ data, id, setId, unique, activeAccordian }) => {
  const [toggleClass, setToggleClass] = useState(false);
  useEffect(() => {
    if (id == unique) {
      console.log("chlignggngn", id, unique, toggleClass);
      setToggleClass(!toggleClass);
    }
  }, [id, activeAccordian]);

  return (
    <div className={toggleClass ? "" : "hidden"}>
      <ul>
        {data?.map((item, index) => {
          return (
            <li
              key={item?.card?.info?.id}
              className={`p-2 m-2 border-lighgray border-b-2 flex justify-between items-center`}
            >
              <div className="w-9/12 mr-8">
                <div className="text-sm font-medium flex flex-col p-2">
                  <span>{item?.card?.info?.name}</span>
                  <span>
                    ₹{" "}
                    {item?.card?.info?.price
                      ? item?.card?.info?.price / 100
                      : item?.card?.info?.defaultPrice / 100}
                  </span>
                </div>
                <div className="text-xs opacity-0.2">
                  {item?.card?.info?.description}
                </div>
              </div>
              <div className="w-3/12 h-40 flex flex-col justify-end relative mb-4">
                <img
                  className="w-[150px] h-[100px] object-cover"
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt="Image"
                />
                <button className="self-center text-green-150 font-bold rounded-sm px-7 py-1 absolute z-10 bottom-[-20px] bg-white shadow-sm">
                  Add
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
