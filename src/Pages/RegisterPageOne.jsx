import React ,{useContext}from "react";
import { RegistrationContext } from "../Context/RegistrationContext";
import { useNavigate } from "react-router-dom";
// import { use } from "express/lib/router";

export const Page1 = () => {
    const { name, email ,dispatch} = useContext(RegistrationContext);
    const navigate = useNavigate();

    return (
        <div>
            <h2>Register Page</h2>
            <input
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange={(e) =>
                    dispatch({ type: "CHANGE_NAME", payload: e.target.value })
                }>
            </input>
            <input
                placeholder="Enter your email"
                type="text"
                value={email}
                onChange={(e) =>
                    dispatch({ type: "CHANGE_EMAIL", payload: e.target.value })
                }>
            </input>

            <button
                disabled={name.length == 0 && email.length == 0}
                onClick={() => {
                    navigate("/register/two");
                }}
            >Next</button>
        </div>
    )
}