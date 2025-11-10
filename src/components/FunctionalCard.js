import {useState} from 'react'
const FunctionalCard = (props)=>{
    const { name } = props;
    const [count,setCount] = useState(0);
    const handleClick = ()=>{
        setCount(count + 1);
    }
    return (
        <div className = 'user-card'>
            <h1> Functional CARD</h1>
            <h2> {name}</h2>
            <h3> Sonipat </h3>
            <h4> <button onClick = {handleClick}> Count </button> : {count}</h4>
        </div>
    )
}
export default FunctionalCard;