import { useEffect, useState, useContext } from "react";
import RestaurantCard, {withOpenLabel} from "./RestaurantCard";
import {SWIGGY_API} from '../utils/constant'
import Shimmer from './Shimmer'
import UserContext from '../utils/UserContext';
import React from 'react';
const Body = () => {
    const [filteredList, setFilteredList] = useState([]);
    const [searchRest, setSearchRest] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [loading, setLoading] = useState(true)
    const RestaurantCardOpenComp = withOpenLabel(RestaurantCard);
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
        console.log(filteredList)
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
    const {loggedInUser, setUserName} = useContext(UserContext)
    // Conditional Rendering : 
    return loading ?  <Shimmer/> : (
        <div > 
            <div className="flex justify-between space-x-4 m-4">
                <div className = 'flex space-x-2 '>
                    <input 
                    data-testid = "search-input"
                    className = 'border border-gray-400 p-2 rounded-2xl'
                    type = 'text' 
                    value = {searchRest} 
                    onChange={(e)=>{setSearchRest(e.target.value)}}>  
                    </input>
                    <button 
                    className = 'border border-black px-2 rounded-2xl bg-green-100 hover:bg-green-300 cursor-pointer'
                    onClick={()=>{
                        setFilteredList(
                            listOfRestaurants.filter((rest)=>rest.info.name.toLowerCase().includes(searchRest.toLowerCase()))
                        )
                        // console.log(filteredList)
                        if(filteredList.length === 0){
                            return <div> No restaurants to display.</div>
                        }
                    }}
                    > Search</button>
                </div>
                <input 
                type = 'text' 
                className = 'border-1 w-1/6 px-3 border-gray-500 rounded-2xl' 
                placeholder='type username'
                value = {loggedInUser}
                onChange = {(e)=>{setUserName(e.target.value)}}>
                </input>
                <button className='border border-black px-2 rounded-2xl bg-green-100 hover:bg-green-300 cursor-pointer' onClick={showTopRated}> Top Rated Restaurants</button>
                <button className='border border-black px-2 rounded-2xl bg-green-100 hover:bg-green-300 cursor-pointer' onClick={showAll}> Show All Restaurants</button>
            </div>
            <div className='flex flex-wrap m-2 justify-between space-y-2'>
                {
                    filteredList.length === 0 ? <div className ='font-bold text-center text-2xl'>No restaurants to display</div> : filteredList.map((restaurant) => (
                        <div data-testid ='res-card' className = 'hover:bg-gray-200 cursor-pointer rounded-lg' key = {restaurant?.info?.id} >{restaurant?.info?.isOpen ? <RestaurantCardOpenComp resData = {restaurant?.info}/>: <RestaurantCard resData={restaurant?.info} />}</div>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;