import { Component } from "react";
import UserClass from "./UserClass";
class About extends Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent Components Did Mount")
    }
    render(){
        console.log("parent Render")
        return(
            <div className="flex flex-wrap">
                <h1 className="font-bold">about</h1> 
                <UserClass name={" first Class"} Location = {" HyderabadClass"}/>
            </div>
            
        )
    }
}
export default About;