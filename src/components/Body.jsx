import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";
import { ShimmerPostList } from "react-shimmer-effects";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [clearFilter, setClearFilter] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9939595&lng=80.1706653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    
    const restaurants =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurant(restaurants);
    setClearFilter(restaurants);
  };

  const handleClear = () => {
    setListOfRestaurant(clearFilter);
  };

  return listOfRestaurant.length === 0 ? (
    <ShimmerPostList
      postStyle="STYLE_FIVE"
      imageWidth={80}
      imageHeight={80}
      col={4}
      row={2}
      gap={20}
    />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="search-text">Search for restaurant</span>
          <button
          className="search-btn"
            onClick={() => {
              const filteredListRes = clearFilter.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filteredListRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = clearFilter.filter(
              (item) => item?.info?.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button onClick={handleClear} className="clear-btn">Clear</button>
      </div>
      <div className="res-container">
        {listOfRestaurant
          .filter((restaurant) => {
            const id = restaurant?.info?.cloudinaryImageId;
            return typeof id === "string" && id.trim() !== "";
          })
          .map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant.info} />
          ))}
      </div>
    </div>
  );
};

export default Body;
