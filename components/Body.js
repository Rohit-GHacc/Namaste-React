import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = ()=>(
    <div>
        <input className ='search' type = 'text' placeholder='Search'/>
        <div className = 'res-card-container'>
            {
                resList.map((restaurant)=>(
                    <RestaurantCard resData = {restaurant.info}/>
                ))
            }
        </div>
    </div>
)
export default Body;