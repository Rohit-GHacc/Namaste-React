import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer'
const Body = () => {
    const [load, setLoad] = useState(true)
    const [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        fetchData();
    }, [load])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.99308229999999&lng=77.0150735&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    const showTopRated = () => {
        setFilteredList(filteredList.filter((restaurant) => restaurant.info.avgRating > 4.4));
    }
    const showAll = () => {
        setLoad((prev) => !prev)
    }
    console.log(filteredList.length)
    if (filteredList.length === 0) {
        return <Shimmer />
    }
    return (
        <div>
            <div className="search">
                <button className='search-btn' onClick={showTopRated}> Top Rated Restaurants</button>
                <button className='search-btn' onClick={showAll}> Show All Restaurants</button>
            </div>
            <div className='res-card-container'>
                {
                    filteredList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;