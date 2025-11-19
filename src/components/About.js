
import FunctionalCard from './FunctionalCard'
import ClassCard from './ClassCard'
import React from 'react'
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("Parent mounted")
    }
    render(){
        console.log("Parent render")
        return (
            <div className = 'about' >
                <h1>This is About Us page.</h1>
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h2 className='font-bold text-xl'>User Context Value: {loggedInUser}</h2>
                    )}
                </UserContext.Consumer>
                <FunctionalCard name = 'Rohit Chugh'/>
                <ClassCard name = 'Mansi Chugh'/>

            </div>
        )
    }
}
export default About