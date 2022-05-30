import React from "react";

export const RegistrationContext = React.createContext();

const initState = {
    name: "",
    email: "",
    address: "",
    phone: ""
}

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_NAME":
            return { ...state, name: action.payload };
        case "CHANGE_EMAIL":
            return { ...state, email: action.payload };
        case "CHANGE_ADDRESS":
            return { ...state, address: action.payload };
        case "CHANGE_PHONE":
            return { ...state, phone: action.payload };
        default:
            throw new Error();
    }
}

export function RegistrationContextProvider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initState);

    const handleSubmit = () => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .catch((error) => console.log(error));
    };

    const { name, email, address, phone} = state;
    return (
        <RegistrationContext.Provider
            value={{
                name,
                email,
                address,
                phone,
                dispatch,
                handleSubmit
            }}
        >
            {children}
        </RegistrationContext.Provider>
    )
}