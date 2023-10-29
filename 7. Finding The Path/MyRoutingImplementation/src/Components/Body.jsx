import { Fragment, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { FOOD_ITEM_API  } from "../utils/Constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [swiggyData, setSwiggyData] = useState([]);
  const [cacheData,setCacheData] = useState([]);
  const [searchData,setSearchData] = useState('');

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
  },[cacheData])

  const FilterLessThen4 = () => {
    if (swiggyData.length > 0) {
     let newUpdatedData = cacheData.filter((item,index) => {
        return (
          item?.info?.avgRating < 4
        )
      })
      console.log(newUpdatedData)
      setSwiggyData(newUpdatedData)
    }
  }

  const Search = () => {
    const filteredData = cacheData.filter((item) => {
      if (item?.info?.name.toLowerCase().includes(searchData.toLowerCase())) {
          return true;
      } else {
        return false;
      }
    }) 
    if (searchData === '') {
      setSwiggyData(cacheData);
    }
    setSwiggyData(filteredData)
  }


  return (
    <>
      <div className="body container">
        <div className="search-container">
          <div className="search">
            <input onChange={(event) => setSearchData(event.target.value)} value={searchData} type="text" placeholder="Search" />
            <button onClick={Search}>Search</button>
          </div>
          <button className="filter btn" onClick={FilterLessThen4}>Filter less 4 Rating</button>
        </div>
          <div className="sub-card">
            {swiggyData?.length > 0 ? swiggyData?.map((item, index) => {
              return (
                <Fragment key={item?.info?.id}>
                  <RestaurantCard foodItem={item?.info} />
                </Fragment>
              );
            }) : 
            <>
              <Shimmer />
            </>
            }
          </div>
        </div>
    </>
  );
};

export default Body;
