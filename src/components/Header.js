import {LOGO_URL}  from "../utils/constant";
const Header = ()=>(
    <div className = 'nav'>
        <img src= {LOGO_URL} className = 'logo'/>
        <ul className = 'nav-list'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
)
export default Header;