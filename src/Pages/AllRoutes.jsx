import React from "react"
import { Routes, Route } from "react-router-dom"
import { DashBoard } from "./Dashboard"
import { Page1 } from "./RegisterPageOne"
import { Page2 } from "./RegisterPageTwo"

export const AllRoutes = () =>{
    return (
        <div>
          
            <Routes>
                <Route path="/" element={<DashBoard/>}></Route>
                <Route path="/register/one" element={<Page1/>}></Route>
                <Route path="/register/two" element={<Page2/>}></Route>
            </Routes>
        </div>
    )
}