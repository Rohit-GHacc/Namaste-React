import React from 'react'
const Contact = ()=>{
    return (
        <div className = 'flex flex-col items-center'>
            <h1 className = 'text-center font-bold text-3xl mt-10 mb-4'>
                Contact Us
            </h1>
            <form className = 'flex flex-col w-1/2 border border-gray-400 rounded-lg shadow-lg p-4 items-center'>
            <input type = 'text' placeholder = 'Enter your name' className = ' w-9/10 border border-gray-400 m-4 p-2 rounded-lg'/>
            <textarea type = 'text' placeholder = 'Enter your message' className = 'w-9/10 border border-gray-400 m-4 p-2 rounded-lg'/> 
            <button className = 'bg-gray-400 w-1/2 px-4 py-3 m-4 rounded-2xl hover:bg-gray-600 text-white text-xl cursor-pointer' >Submit</button>
            </form>
        </div>
    )
}

export default Contact
