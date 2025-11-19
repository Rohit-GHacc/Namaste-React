import {LOGO_URL}  from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Header = ()=>{
    const isOnline = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
    <div className = 'flex justify-between shadow-lg bg-green-100'>
        <img src= {LOGO_URL} className = 'w-50'/>
        <ul className = 'flex items-center text-2xl space-x-8 px-6'>
            <li>Online: {isOnline ? '🟢' : '🔴'}</li>
            <Link className = 'hover:text-pink-500' to="/"><li>Home</li></Link>
            <Link className = 'hover:text-pink-500' to="/about"><li>About Us</li></Link>
            <Link className = 'hover:text-pink-500' to="/contact"><li>Contact Us</li></Link>
            <Link className = 'hover:text-pink-500' to="/cart"><li>Cart</li></Link>
            <li>{loggedInUser}</li>
        </ul>
    </div>
    )
}
export default Header;