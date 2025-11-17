import {LOGO_URL}  from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'
const Header = ()=>{
    const isOnline = useOnlineStatus();
    return (
    <div className = 'flex justify-between shadow-lg m-2 p- bg-pink-100'>
        <img src= {LOGO_URL} className = 'w-50'/>
        <ul className = 'flex items-center text-2xl space-x-8 px-4'>
            <li>Online: {isOnline ? '🟢' : '🔴'}</li>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
        </ul>
    </div>
    )
}
export default Header;