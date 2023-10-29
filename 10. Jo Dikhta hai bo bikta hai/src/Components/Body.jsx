import { Fragment, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { FOOD_ITEM_API } from "../utils/Constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [swiggyData, setSwiggyData] = useState([]);
  const [cacheData, setCacheData] = useState([]);
  const [searchData, setSearchData] = useState("");

  async function fetchData() {
    const res = await fetch(FOOD_ITEM_API);
    const data = await res.json();
    setCacheData(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSwiggyData(cacheData);
  }, [cacheData]);

  console.log(swiggyData, "sajdflkj");

  const FilterLessThen4 = () => {
    if (swiggyData.length > 0) {
      let newUpdatedData = swiggyData.filter((item, index) => {
        return item?.info?.avgRating < 4;
      });
      console.log(newUpdatedData);
      setCacheData(newUpdatedData);
    }
  };

  const Search = () => {
    const filteredData = cacheData.filter((item) => {
      if (item?.info?.name.toLowerCase().includes(searchData.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    if (searchData === "") {
      setSwiggyData(cacheData);
    }
    setSwiggyData(filteredData);
  };

  return (
    <>
      <div className="">
        <div className="m-4 p-4 flex justify-between">
          <div className="flex">
            <input
              className="border-2 border-solid border-black mr-3 p-1"
              onChange={(event) => setSearchData(event.target.value)}
              value={searchData}
              type="text"
              placeholder="Search"
            />
            <button
              className="border-2 border-solid border-blue-400 px-6 text-lg cursor-pointer shadow-sm rounded"
              onClick={Search}
            >
              Search
            </button>
          </div>
          <button
            className="text-base font-medium cursor-pointer p-1 bg-white"
            onClick={FilterLessThen4}
          >
            Filter less 4 Rating
          </button>
        </div>
        <div className="flex m-4 p-1 h-72 flex-wrap">
          {swiggyData?.length > 0 ? (
            swiggyData?.map((item, index) => {
              return (
                <Fragment key={item?.info?.id}>
                  <RestaurantCard foodItem={item?.info} />
                </Fragment>
              );
            })
          ) : (
            <>
              <Shimmer />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
