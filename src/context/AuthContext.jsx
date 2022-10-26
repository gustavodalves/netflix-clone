/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext({});

function AuthProvider({ children }) {
  const { isAuthenticated, login, createCredentials } = useAuth();

    return (
        <Context.Provider value={{ isAuthenticated, login, createCredentials }}>
            { children }
        </Context.Provider>
    )
}

export {
    Context,
    AuthProvider
}
