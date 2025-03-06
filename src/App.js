import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';
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

const AppLayout = ()=>(
    <div className = 'layout'>
        <Header/>
        <Body/>
        <Footer/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>);


