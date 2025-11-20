import { useDispatch } from "react-redux";
import { imageUrl } from "../utils/constant";
import {useState, useEffect} from 'react'
import { addItem } from "../utils/cartSlice";
import React from 'react'
const RestaurantCard = (props)=>{
    const {resData} = props;
    const [colorValue, setColorValue] = useState(500);
    const handleMouseOver = ()=>{
        setColorValue(900);
    }
    useEffect(()=>{
        setColorValue(500);
    },[])
    console.log(resData);
    const dispatch = useDispatch();
    return <div className = 'w-[200px] m-2 p-2 rounded-lg ' onMouseOver ={handleMouseOver} onMouseLeave= {()=>setColorValue(500)} onClick = {()=>dispatch(addItem(resData))}>
        <img className = 'rounded-lg' src={imageUrl + resData.cloudinaryImageId}></img>
        <h3 className = 'font-bold text-lg py-2'>{resData?.name}</h3>
        <h4> {resData.cuisines.join(', ')}</h4>
        <h4>{resData.avgRating} stars</h4>
        <h4>{resData.sla.deliveryTime} minutes</h4>
        <button className = {`bg-green-${colorValue} p-4 m-2 text-white rounded-2xl cursor-pointer`}> Add to Cart </button>
    </div>
}

export const withOpenLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className = 'absolute text-white bg-green-500 p-2 m-3 rounded-xl'> Open </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;