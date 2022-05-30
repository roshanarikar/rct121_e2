import React from "react";
import { RegistrationContext } from "../Context/RegistrationContext";
import { Navigate } from "react-router-dom";

export const Page2 = () => {
    const {
        address,
        phone,
        handleSubmit
    } = React.useContext(RegistrationContext);

    if ( phone.length == 0 &&  address.length == 0) {
        return <Navigate to="/register/two"></Navigate>
    }
    return (
        <div>
            <input
                placeholder="Enter your address"
                type="text"
                value={address}
                onChange={(e) =>
                    dispatch({
                        type: "CHANGE_ADDRESS",
                        payload: e.target.value
                    })
                }
            ></input>
            <input
                placeholder="Enter you phone number"
                type="text"
                value={phone}
                onChange={(e) =>
                    dispatch({
                        type: "CHANGE_PHONE",
                        payload: e.target.value
                    })
                }
            ></input>
            <button
                disabled={
                    address.length == 0 || phone.length == 0 
                                }
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}