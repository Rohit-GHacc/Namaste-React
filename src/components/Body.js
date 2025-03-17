import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import {SWIGGY_API} from '../utils/constant'
import {Link} from 'react-router-dom'
import Shimmer from './Shimmer'
const Body = () => {
    const [filteredList, setFilteredList] = useState([]);
    const [searchRest, setSearchRest] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchData();
    },[]) // it is ran only on the first render of this Body component                     

    const fetchData = async () => {
        // console.log(`${SWIGGY_API}`)
        const data = await fetch(""+SWIGGY_API)
        console.log("data : " + data)
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setLoading(false);
    }
    const showTopRated = () => {
        setFilteredList(listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.3));
        // console.log(filteredList)
        if(filteredList.length===0){
            return <div>
                No Restaurants present to display.
            </div>
        }
    }

    const showAll = () => {
        setFilteredList(listOfRestaurants)
    }

    // console.log(filteredList.length)

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
                        // console.log(filteredList)
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
                    filteredList.length === 0 ? <div className ='no-rest-message'>No restaurants to display</div> : filteredList.map((restaurant) => (
                        <Link to={`/restaurants/${restaurant?.info?.id}`} key = {restaurant?.info?.id} ><RestaurantCard resData={restaurant?.info} /></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;