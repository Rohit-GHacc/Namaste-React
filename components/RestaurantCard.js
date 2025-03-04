import { imageUrl } from "../utils/constant";
const RestaurantCard = (props)=>{
    const {resData} = props;
    return (<div className = 'res-card'>
        <img src={imageUrl + resData.cloudinaryImageId}></img>
        <h3>{resData?.name}</h3>
        <h4> {resData.cuisines.join(', ')}</h4>
        <h4>{resData.avgRating} stars</h4>
        <h4>10 minutes</h4>
    </div>)
}
export default RestaurantCard;