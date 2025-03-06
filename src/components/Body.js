import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = ()=>{
    const [filteredList, setFilteredList] = useState(resList);
    const search = ()=>{
        setFilteredList(resList.filter((restaurant)=>restaurant.info.avgRating > 4.4));
    }
    const showAll = ()=>{
        setFilteredList(resList);
    }
    return <div>
        <div className="search">
            <button className = 'search-btn' onClick={search}> Top Rated Restaurants</button>
            <button className = 'search-btn' onClick={showAll}> Show All Restaurants</button>
        </div>
        <div className = 'res-card-container'>
            {
                filteredList.map((restaurant)=>(
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant.info}/>
                ))
            }
        </div>
    </div>
}
export default Body;