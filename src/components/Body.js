import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer'
const Body = () => {
    const [filteredList, setFilteredList] = useState([]);
    const [searchRest, setSearchRest] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.99308229999999&lng=77.0150735&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setLoading(false);
    }
    const showTopRated = () => {
        setFilteredList(listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.3));
        if(filteredList.length===0){
            return <div>
                No Restaurants present to display.
            </div>
        }
    }

    const showAll = () => {
        setFilteredList(listOfRestaurants)
    }

    console.log(filteredList.length)

    // Conditional Rendering : 
    return loading ?  <Shimmer/> : (
        <div>
            <div className="filter">
                <div>
                    <input 
                    type = 'text' 
                    value = {searchRest} 
                    onChange={(e)=>{setSearchRest(e.target.value)}}>  
                    </input>
                    <button 
                    className = 'search-btn'
                    onClick={()=>{
                        setFilteredList(
                            listOfRestaurants.filter((rest)=>rest.info.name.toLowerCase().includes(searchRest.toLowerCase()))
                        )
                        if(filteredList.length === 0){
                            return <div>No restaurants to display.</div>
                        }
                    }}
                    > Search</button>
                </div>
                <button className='search-btn' onClick={showTopRated}> Top Rated Restaurants</button>
                <button className='search-btn' onClick={showAll}> Show All Restaurants</button>
            </div>
            <div className='res-card-container'>
                {
                    filteredList.length===0 ? <div className ='no-rest-message'>No restaurants to display</div> : filteredList.map((restaurant) => (
                        <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;