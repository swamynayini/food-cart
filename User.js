import { useState } from "react";
const User = ()=>{
    const[count] = useState(0)
    const[count2] = useState(1)
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>name: Swamy</h2>
            <h2>Location:Hyderabad</h2>
            <h2>contact:@Swamynayini</h2>
        </div>
    )
}
export default User;