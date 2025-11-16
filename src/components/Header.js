import {LOGO_URL}  from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'
const Header = ()=>{
    const isOnline = useOnlineStatus();
    return (
    <div className = 'nav'>
        <img src= {LOGO_URL} className = 'logo'/>
        <ul className = 'nav-list'>
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