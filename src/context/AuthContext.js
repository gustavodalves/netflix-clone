import { createContext, useState } from "react";

const Context = createContext();

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(true)

    return (
        <Context.Provider value={{ authenticated }}>
            { children }
        </Context.Provider>
    )
}

export {
    Context,
    AuthProvider
}