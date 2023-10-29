import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <>
        <div className="body">
          <div className="search-container">
            <input className="search" type="text" placeholder="Search" />
          </div>
          div
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

  export default Body;