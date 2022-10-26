import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const auth = getAuth();

    const createCredentials = async ({ email, password }) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            return true
        } catch(err) {
            return false
        }
    }

    const login = async ({ email, password }) => {
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('token', user.accessToken);
            setIsAuthenticated(true)

            return true
        } catch(err) {
          localStorage.removeItem('token');
          setIsAuthenticated(false)

          return false
        }
    }

    const validateToken = async (token) => !!token

    return { isAuthenticated, login, validateToken, createCredentials }
}

export default useAuth;