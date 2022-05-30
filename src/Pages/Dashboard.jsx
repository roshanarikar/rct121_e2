import React from "react";
import { Link } from "react-router-dom";


export const DashBoard =()=>{
    return <div style={{ display: "flex", gap:"20px"}}>
        <h1>DashBoard</h1>
            <Link to="/register/one">Registration 1</Link>
            <Link to="/register/two">Registration 2</Link>
    </div>
}