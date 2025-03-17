import {useEffect} from 'react'
const Restaurant = ()=>{
    useEffect(()=>{
        // const data = await fetch();
        // const json = await data.json()
        const fetch=  async()=>{
            console.log("abdcd")
        }
        fetch();
    },[])
    return (
        <div>
            <h1>Name of the Restaurant</h1>
            <h2> Locality</h2>
            <h2> Dishes</h2>
            <ul>
                <li>Dish 1</li>
                <li>Dish 1</li>
                <li>Dish 1</li>
                <li>Dish 1</li>
            </ul>
        </div>
    )
}

export default Restaurant