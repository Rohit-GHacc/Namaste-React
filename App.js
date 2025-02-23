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


const heading1 = React.createElement('h1', {key:'heading1'}, "Rohit! Learn React quickly!")
const heading2 = React.createElement('h2', {key:'heading2'}, "Ok Boss !!")
const child = React.createElement('div',{id: "child"},[heading1, heading2])
const parent = React.createElement('div',{id:"parent",},child)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);


