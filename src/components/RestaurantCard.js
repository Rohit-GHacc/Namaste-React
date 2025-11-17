import { imageUrl } from "../utils/constant";
const RestaurantCard = (props)=>{
    const {resData} = props;
    return <div className = 'w-[200px] m-2 p-2 rounded-lg '>
        <img className = 'rounded-lg' src={imageUrl + resData.cloudinaryImageId}></img>
        <h3 className = 'font-bold text-lg py-2'>{resData?.name}</h3>
        <h4> {resData.cuisines.join(', ')}</h4>
        <h4>{resData.avgRating} stars</h4>
        <h4>{resData.sla.deliveryTime} minutes</h4>
    </div>
}

export const RestaurantCardOpen = (RestaurantCard)=>{
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