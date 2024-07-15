import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log("child Contructor")
        this.state ={
            userInfo:{
                name : "dummy",
                location : "dumy"
                
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/swamynayini")
        const json = await data.json()
        this.setState({
            userInfo:json
        })
        console.log(json)
        
        // console.log("child Components Did Mount")
    }
    render(){
        const {name,Location,avatar_url} = this.state.userInfo
        
        // console.log("child Render")
        return(
            <div className="user-card">
            <img src = {avatar_url}></img>
            <h2>name:{name}</h2>
            <h2>Location:{Location}</h2>
            <h2>contact:@Swamynayini</h2>
        </div>
        )
    }
}
export default UserClass;