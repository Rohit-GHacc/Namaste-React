import React from 'react';
import ReactDOM from 'react-dom/client'
{/* 
    <div id ="parent">
        <div id = "child">
            <h1>Hello Rohit learn react quickly</h1>
            <h1> Ok Boss !!</h1>   
        </div>
    </div> 
*/}

// this is JSX, HTML-like syntax
// JSX => Babel converts it to React.createElement => It returns a React Element object => Parcel converts it to HTML element before sending it to the browser
// const jsxHeading = <h1 className = "heading">Namaste Rohit Ji!! 🙏🙏</h1>
// const heading1 = React.createElement('h1', {key:'heading1'}, [jsxHeading, "Rohit! Learn React quickly!"])
// const heading2 = React.createElement('h2', {key:'heading2'}, "Ok Boss !!")
// const child = React.createElement('div',{id: "child"},[heading1, heading2])
// const parent = React.createElement('div',{id:"parent",},child)

// const Title = ()=><h1> 🙏 Namaste React - Akshay Saini 🙏</h1>
// const Parent = ()=>(
//     <div id='parent' className = 'parent'>
//         <Title/>
//         <h1> 🙏 Namaste Rohit !🙏</h1>
//         <h2> Learn React quickly</h2>
//     </div>
// )
// // <Parent/> === Parent() => false
// console.log("<Parent/> ",<Parent/>)
// console.log("Parent() ",Parent())
// console.log(<Parent/> === Parent())
const Header = ()=>(
    <div className = 'nav'>
        <img src='https://logodix.com/logo/852975.jpg' className = 'logo'/>
        <ul className = 'nav-list'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    </div>
)
const RestaurantCard = (props)=>(
    <div className = 'res-card'>
        <img src='http://3.bp.blogspot.com/-uck7Fi_bRfw/UA7ogu0DrzI/AAAAAAAARSI/rmu9iluFJG0/s1600/cb+ten.jpg'></img>
        <h3>{props.res_name}</h3>
        <h4> {props.cuisine}</h4>
        <h4>{props.stars} stars</h4>
        <h4>10 minutes</h4>
    </div>
)
const Body = ()=>(
    <div>
        <input className ='search' type = 'text' placeholder='Search'/>
        <div className = 'res-card-container'>
            <RestaurantCard res_name = 'Dada Chholey Bhature' stars = '4' cuisine= 'North indian, Chholey bhature, Naan, raita, rajma, Shaahi paneer'/>
             <RestaurantCard res_name='Bunty da Dhaba' stars = '4' cuisine='North indian, bunty da dhaba, roti, subzi'/>
        </div>
    </div>
)
const Footer = ()=>(
    <div>

    </div>
)
const AppLayout = ()=>(
    <div className = 'layout'>
        <Header/>
        <Body/>
        <Footer/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>);


