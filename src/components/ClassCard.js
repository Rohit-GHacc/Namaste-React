import React from 'react'
class ClassCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 1,
            userInfo: {
                name : "Dummy",
                location: "Default"
            }
        }
        console.log("Child constructor")
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Rohit-GHacc")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }
    render() {
        const {name, location, avatar_url} = this.state.userInfo
        console.log("Child render")
        return (
            <div className = 'user-card'>
                <img src = {avatar_url}/>
                <h2> {name}</h2>
                <h3> {location}</h3>
                <h4> <button onClick = {()=>{this.setState({ count: this.state.count + 1 });}}>Count : </button> {this.state.count}</h4>
            </div>
        );
    }
}
export default ClassCard;