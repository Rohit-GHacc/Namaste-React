<<<<<<< HEAD
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
const Restaurant = ()=>{
    const [items,setItems] = useState(null);
    const [resInfo,setResInfo] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu =  async()=>{
        // console.log("abdcd")
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.9840222&lng=77.0233415&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER `);
        console.log("data : "+ data)
        const json = data.json();
        console.log("JSON : " + json);
        setResInfo(json);
        const itemList = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        console.log(itemList);
        setItems(itemList);
        
    }
    if(resInfo===null) return <Shimmer/>
    console.log("resInfo : ", resInfo);
=======
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';


const Restaurant = ()=>{
    const {id} = useParams();
    const resInfo = useRestaurantMenu(id);
    if(resInfo===null) return <Shimmer/>
    console.log("resInfo : ", resInfo);
    const items = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
>>>>>>> 9f3eb76 (first commit on mac)
    const {name,areaName}  = resInfo?.data?.cards[2]?.card?.card?.info;
    return (
        <div>
            <h1>{name}</h1>
            <h2> {areaName}</h2>
            <h2> Dishes</h2>
            <ul>
            {
                items.map((item)=>{
                    return (
                        <li>{item?.card?.info?.name}</li>
                    )
                })
            } </ul>
        </div>
    )
}

export default Restaurant