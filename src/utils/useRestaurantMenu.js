import { useEffect, useState} from "react";
import { RESTAURANT_API } from "./constant";

const useRestaurantMenu = (id)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    })
    const fetchData = async()=>{
        const data = await fetch(RESTAURANT_API + id);
        const json = await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestaurantMenu;