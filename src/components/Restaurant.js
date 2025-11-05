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
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.99308229999999&lng=77.0150735&restaurantId=${id}&catalog_qa=undefined`);
        const json = await data.json();
        console.log(json);
        setResInfo(json);
        const itemList = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
        console.log(itemList);
        setItems(itemList);
    }
    if(resInfo===null) return <Shimmer/>
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